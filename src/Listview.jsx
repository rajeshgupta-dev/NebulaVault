import React, { useEffect, useRef, useState } from 'react'
import { db } from './firebase';
import { ref, push, onValue } from 'firebase/database';


const Listview = ({ tab }) => {
  const [item, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const allItems = JSON.parse(localStorage.getItem("item"))

  let perPage = 5
  const page = Math.ceil(allItems.length / perPage)
  const start = (currentPage - 1) * perPage
  const end = start + perPage
  const paginated = allItems.splice(start, end)


  const freezRef = useRef(false);
  const bufferRef = useRef([]);
  useEffect(() => {
    const dbref = ref(db, tab);
    const unSubscribe = onValue(dbref, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.values(data);

      if (freezRef.current) {
        bufferRef.current = list
      } else {
        setItems(list);
      }
    })
    return () => unSubscribe();
  }, [tab])

  // useEffect(() => {
  //   localStorage.setItem(tab)
  // }, [tab]);

  function addItem() {
    push(ref(db, tab), {
      name: "New Item " + Date.now()
    })
    console.log("item", tab, ref)
    let setItemTolocal = [...item, { name: "New Item" + Date.now() }]
    setItems(setItemTolocal);
    localStorage.setItem("item", JSON.stringify(item));

  }

  let pageNum = Array.from({ length: page }, (_, i) => i + 1);
  // console.log(pageNum)
  return (
    <div>
      {tab.toUpperCase()}
      <button onClick={addItem}>Add Item</button>
      <button>{freezRef.current ? "Unfrze" : "Freze"}</button>

      <ul>
        {
          paginated.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))
        }
      </ul>

      {/* pagination */}
      <button onClick={() => setCurrentPage((pre) => pre - 1)} disabled={currentPage === 1}>👈</button>
      {
        pageNum.map((num) => (
          <button onClick={() => setCurrentPage(num)}>{num}</button>
        ))
      }
      <button onClick={() => setCurrentPage((pre) => pre - 1)} disabled={currentPage === allItems.length}>👉</button>
    </div>
  )
}

export default Listview