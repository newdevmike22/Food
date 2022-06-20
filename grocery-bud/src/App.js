import { useState, useEffect } from "react";
import Alert from "./comps/Alert";
import List from "./comps/List";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: "", type: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      // dispalay alert
      showAlert(true, "danger", "Please enter a value.");
    } else if(name && isEditing) {
      // editing
    } else {
      showAlert(true, "success", "An item was added to the list!")
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName("");
    }
  }

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show: show, type, msg})
  }

  const clearList = () => {
    showAlert(true, "danger", "Your list is now empty!");
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, "danger", "Item removed!");
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert = {showAlert} list={list} />}
      <h3>Grocery Bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="e.g. milk" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="submit-btn">
          {isEditing ? "edit" : "submit"}
        </button>
      </div>
    </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearList}>Clear Items</button>
        </div>
      )}
    </section>
  )
}

export default App;