import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MODELS_KEY = 'models_static'

function readModels(){ try{ return JSON.parse(localStorage.getItem(MODELS_KEY)||'[]') }catch(e){return[]} }
function writeModels(arr){ localStorage.setItem(MODELS_KEY, JSON.stringify(arr)) }

export default function Admin(){
  const [models,setModels] = useState([])
  const [name,setName] = useState('')
  const [city,setCity] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [description,setDescription] = useState('')
  const [photoFile,setPhotoFile] = useState(null)

  useEffect(()=> setModels(readModels()), [])

  const handleAdd = ()=>{
    if(!name||!price) return alert('Please add name and price')
    // convert image to data URL if provided
    if(photoFile){
      const reader = new FileReader()
      reader.onload = ()=>{
        const photo = reader.result
        const m = { id: Date.now().toString(), name, city, category, price, description, photo }
        const arr = [m, ...readModels()]
        writeModels(arr); setModels(arr)
        setName(''); setCity(''); setCategory(''); setPrice(''); setDescription(''); setPhotoFile(null)
      }
      reader.readAsDataURL(photoFile)
    } else {
      const m = { id: Date.now().toString(), name, city, category, price, description, photo: null }
      const arr = [m, ...readModels()]
      writeModels(arr); setModels(arr)
      setName(''); setCity(''); setCategory(''); setPrice(''); setDescription('')
    }
  }

  const handleSeed = ()=>{
    const demo = [
      { id:'m1', name:'Asha Verma', city:'Mumbai', category:'Fashion', price:2000, description:'Experienced model', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80' },
      { id:'m2', name:'Rina Kapoor', city:'Bengaluru', category:'Fitness', price:1800, description:'Fitness and gym shoots', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80' }
    ]
    const arr = [...demo, ...readModels()]
    writeModels(arr); setModels(arr)
  }

  const handleDelete = (id)=>{
    if(!confirm('Delete model?')) return
    const arr = readModels().filter(m=>m.id!==id)
    writeModels(arr); setModels(arr)
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Admin - Manage Models</h1>
        <div><Link className="link" to="/">Customer view</Link></div>
      </header>

      <div style={{marginTop:16}} className="card">
        <h3>Add Model</h3>
        <div style={{display:'grid',gap:8, marginTop:8}}>
          <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
          <input className="input" placeholder="City" value={city} onChange={e=>setCity(e.target.value)} />
          <input className="input" placeholder="Category" value={category} onChange={e=>setCategory(e.target.value)} />
          <input className="input" placeholder="Price per hour" value={price} onChange={e=>setPrice(e.target.value)} />
          <textarea className="input" placeholder="Short description" value={description} onChange={e=>setDescription(e.target.value)} />
          <input type="file" onChange={e=>setPhotoFile(e.target.files[0])} />
          <div style={{display:'flex',gap:8}}>
            <button className="btn btn-primary" onClick={handleAdd}>Add</button>
            <button className="btn" onClick={handleSeed}>Seed demo</button>
          </div>
        </div>
      </div>

      <div style={{marginTop:16}}>
        <h3>Existing models</h3>
        <div className="grid grid-3" style={{marginTop:8}}>
          {models.map(m=>(
            <div key={m.id} className="card">
              <img src={m.photo||'https://via.placeholder.com/400x300'} alt={m.name} className="thumb" />
              <h4 style={{marginTop:8}}>{m.name}</h4>
              <p className="small">{m.city} • {m.category} • ₹{m.price}/hr</p>
              <div style={{marginTop:8, display:'flex', gap:8}}>
                <button className="btn" onClick={()=>handleDelete(m.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
