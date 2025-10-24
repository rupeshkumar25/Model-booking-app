import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MODELS_KEY = 'models_static'
const BOOKINGS_KEY = 'bookings_static'

function readModels(){
  try { return JSON.parse(localStorage.getItem(MODELS_KEY) || '[]') } catch(e){ return [] }
}
function writeModels(arr){ localStorage.setItem(MODELS_KEY, JSON.stringify(arr)) }

export default function App(){
  const [models, setModels] = useState([])
  useEffect(()=> setModels(readModels()), [])

  return (
    <div className="container">
      <header className="header">
        <h1>Model Booking — Browse</h1>
        <div>
          <Link className="link" to="/admin">Admin</Link>
        </div>
      </header>

      <div style={{marginTop:16}}>
        {models.length===0 && <div className="card"><p>No models yet. Go to <Link to='/admin' className='link'>Admin</Link> to add demo models.</p></div>}
        <div className={`grid ${models.length>0 ? 'grid-3' : ''}`} style={{marginTop:12}}>
          {models.map(m=>(
            <div key={m.id} className="card">
              <img src={m.photo || 'https://via.placeholder.com/400x300'} alt={m.name} className="thumb" />
              <h3 style={{marginTop:8}}>{m.name}</h3>
              <p className="small">{m.city} • {m.category} • ₹{m.price}/hr</p>
              <p style={{marginTop:8}}>{m.description}</p>
              <BookingBox model={m} onBook={()=>{}} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BookingBox({ model }){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [date,setDate]=useState('')
  const [hours,setHours]=useState(1)
  const [saved,setSaved]=useState(false)

  const handle = ()=>{
    if(!name||!email) return alert('Name and email required')
    const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]')
    bookings.push({ id:Date.now(), modelId:model.id, modelName:model.name, name, email, date, hours })
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
    setSaved(true)
    setTimeout(()=>setSaved(false),2000)
    setName(''); setEmail(''); setDate(''); setHours(1)
  }

  return (
    <div style={{marginTop:12}}>
      <div style={{display:'grid',gap:8}}>
        <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <div style={{display:'flex',gap:8}}>
          <input className="input" type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} />
          <input className="input" type="number" min="1" value={hours} onChange={e=>setHours(e.target.value)} style={{width:100}} />
        </div>
        <button className="btn btn-primary" onClick={handle}>{saved ? 'Booked ✓' : 'Book'}</button>
      </div>
    </div>
  )
}
