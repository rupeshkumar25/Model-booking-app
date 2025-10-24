import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const demoModels = {
  m1:{name:'Asha Verma',age:25,desc:'Fashion model',gallery:['https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80','https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80']},
  m2:{name:'Rina Kapoor',age:28,desc:'Fitness model',gallery:['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80','https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80']},
  m3:{name:'Nina Sharma',age:23,desc:'Commercial model',gallery:['https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80','https://images.unsplash.com/photo-1502767089025-6572583495ff?w=400&q=80']},
  m4:{name:'Tara Singh',age:26,desc:'Runway model',gallery:['https://images.unsplash.com/photo-1502767089025-6572583495ff?w=400&q=80','https://images.unsplash.com/photo-1542060747-6d82c5a2d80c?w=400&q=80']},
  m5:{name:'Kriti Jain',age:24,desc:'Editorial model',gallery:['https://images.unsplash.com/photo-1542060747-6d82c5a2d80c?w=400&q=80','https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80']},
  m6:{name:'Pooja Mehra',age:27,desc:'Fitness & Glam',gallery:['https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80','https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80']},
  m7:{name:'Sana Ali',age:22,desc:'Instagram model',gallery:['https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80','https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80']},
  m8:{name:'Meera Rao',age:29,desc:'Lifestyle model',gallery:['https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=401&q=80','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=401&q=80']},
  m9:{name:'Anita Desai',age:25,desc:'Glamour shoots',gallery:['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=401&q=80','https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=401&q=80']},
  m10:{name:'Ritu Kaur',age:26,desc:'Fashion & Events',gallery:['https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=401&q=80','https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=401&q=80']}
}

export default function Profile(){
  const {id} = useParams()
  const navigate = useNavigate()
  const model = demoModels[id]
  if(!model) return <div>Model not found</div>
  return (
    <div className="container">
      <button className="btn btn-primary" onClick={()=>navigate(-1)}>Back</button>
      <h2>{model.name}</h2>
      <p>Age: {model.age}</p>
      <p>{model.desc}</p>
      <div className="grid grid-3">
        {model.gallery.map((img,i)=><img key={i} src={img} className="thumb" alt={model.name}/>)}
      </div>
      <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="whatsapp">🟢</a>
    </div>
  )
}
