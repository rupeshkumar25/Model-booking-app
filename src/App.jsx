import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const demoModels = [
  {id:'m1',name:'Asha Verma',age:25,desc:'Fashion model',img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80'},
  {id:'m2',name:'Rina Kapoor',age:28,desc:'Fitness model',img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80'},
  {id:'m3',name:'Nina Sharma',age:23,desc:'Commercial model',img:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80'},
  {id:'m4',name:'Tara Singh',age:26,desc:'Runway model',img:'https://images.unsplash.com/photo-1502767089025-6572583495ff?w=400&q=80'},
  {id:'m5',name:'Kriti Jain',age:24,desc:'Editorial model',img:'https://images.unsplash.com/photo-1542060747-6d82c5a2d80c?w=400&q=80'},
  {id:'m6',name:'Pooja Mehra',age:27,desc:'Fitness & Glam',img:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80'},
  {id:'m7',name:'Sana Ali',age:22,desc:'Instagram model',img:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80'},
  {id:'m8',name:'Meera Rao',age:29,desc:'Lifestyle model',img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=401&q=80'},
  {id:'m9',name:'Anita Desai',age:25,desc:'Glamour shoots',img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=401&q=80'},
  {id:'m10',name:'Ritu Kaur',age:26,desc:'Fashion & Events',img:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=401&q=80'}
]

export default function App(){
  const navigate = useNavigate()
  return (
    <div className="container">
      <header className="header">
        <h1>Model Booking Portal</h1>
      </header>
      <div className="grid grid-3">
        {demoModels.map(m=>(
          <div key={m.id} className="card" onClick={()=>navigate('/profile/'+m.id)} style={{cursor:'pointer'}}>
            <img src={m.img} className="thumb" alt={m.name} />
            <h3>{m.name}</h3>
            <p>{m.desc}</p>
            <p>Age: {m.age}</p>
          </div>
        ))}
      </div>
      <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="whatsapp">🟢</a>
    </div>
  )
}
