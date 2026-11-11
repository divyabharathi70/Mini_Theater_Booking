import { useState } from 'react'

function AdminFeedback() {
  const [feedback, setFeedback] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('feedback') || '[]')
    } catch {
      return []
    }
  })

  function deleteFeedback(id) {
    const updatedFeedback = feedback.filter((item) => item.id !== id)
    setFeedback(updatedFeedback)
    localStorage.setItem('feedback', JSON.stringify(updatedFeedback))
  }

  return (
    <section className="overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-sm">
      <div className="border-b border-[#3D4F62] p-5">
        <h2 className="text-xl font-bold text-[#3D4F62]">Customer Feedback</h2>
        <p className="mt-1 text-sm text-[#3D4F62]">Feedback submitted from the home page.</p>
      </div>
      {feedback.length === 0 ? <p className="p-6 text-[#3D4F62]">No feedback has been submitted yet.</p> : (
        <div className="divide-y divide-[#3D4F62]/20">
          {feedback.map((item) => (
            <article key={item.id} className="flex flex-wrap items-start justify-between gap-4 p-5">
              <div>
                <h3 className="font-semibold text-[#3D4F62]">{item.name}</h3>
                <p className="text-sm text-[#3D4F62]">{item.email}</p>
                <p className="mt-3 text-[#3D4F62]">{item.message}</p>
              </div>
              <button onClick={() => deleteFeedback(item.id)} className="rounded-lg border border-[#3D4F62] px-3 py-2 text-sm font-semibold text-[#3D4F62] hover:bg-[#F8FAFC]">Delete</button>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default AdminFeedback
