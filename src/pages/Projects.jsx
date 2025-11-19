const cards=[
  {title:'Image Compression Website',desc:'Upload, compress, and download images with a clean UI.',img:'/projects/compress.jpg',url:'#'},
  {title:'Expense Tracker',desc:'Track spending with charts, budgets, and insights.',img:'/projects/expense.jpg',url:'#'},
  {title:'Portfolio Platform',desc:'Reusable templates with animations and theming.',img:'/projects/portfolio.jpg',url:'#'}
]
export default function Projects(){
  return (<div className="pt-28 min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8">Projects</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c,i)=>(<a key={i} href={c.url} className="group glass rounded-2xl overflow-hidden hover:translate-y-[-6px] transition-transform">
          <img src={c.img} alt="" className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
          <div className="p-6"><div className="text-2xl font-semibold mb-2">{c.title}</div><div className="text-gray-700 dark:text-gray-300">{c.desc}</div></div>
        </a>))}
      </div>
    </div>
  </div>)
}
