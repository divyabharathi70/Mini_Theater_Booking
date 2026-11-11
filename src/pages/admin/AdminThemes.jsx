import { useState } from 'react'
import { readCatalog, saveCatalog } from '../../datas/catalogStorage'

function AdminThemes() {
  const [items, setItems] = useState(() => readCatalog('themes'))
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState({ name: '', price: '', description: '', emoji: '' })

  function updateForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function saveItem(event) {
    event.preventDefault()
    const item = { ...form, price: Number(form.price) }
    let updatedItems

    if (editingId === 'new') {
      const newId = items.length ? Math.max(...items.map((item) => Number(item.id) || 0)) + 1 : 1
      updatedItems = [...items, { ...item, id: newId }]
    } else {
      updatedItems = items.map((oldItem) =>
        oldItem.id === editingId ? { ...oldItem, ...item } : oldItem
      )
    }

    setItems(updatedItems)
    saveCatalog('themes', updatedItems)
    setEditingId(null)
  }

  function editItem(item) {
    setForm({
      name: item.name,
      price: String(item.price),
      description: item.description || '',
      emoji: item.emoji || '',
    })
    setEditingId(item.id)
  }

  function deleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
    saveCatalog('themes', updatedItems)
  }

  function startAdding() {
    setForm({ name: '', price: '', description: '', emoji: '' })
    setEditingId('new')
  }

  return (
    <section className="overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-sm">
      <div className="flex items-center justify-between border-b p-5">
        <div>
          <h2 className="text-xl font-bold text-[#3D4F62]">Themes</h2>
          <p className="mt-1 text-sm text-[#3D4F62]">Manage items shown in the booking flow.</p>
        </div>
        <button onClick={startAdding} className="rounded-lg bg-[#3D4F62] px-4 py-2 text-sm font-semibold text-[#F8FAFC]">Add theme</button>
      </div>

      {editingId !== null && (
        <form onSubmit={saveItem} className="grid gap-3 border-b bg-[#F8FAFC] p-5 sm:grid-cols-2">
          <input required name="name" placeholder="Name" value={form.name} onChange={updateForm} className="rounded-lg border px-3 py-2" />
          <input required min="0" type="number" name="price" placeholder="Price" value={form.price} onChange={updateForm} className="rounded-lg border px-3 py-2" />
          <input name="emoji" placeholder="Emoji (optional)" value={form.emoji} onChange={updateForm} className="rounded-lg border px-3 py-2" />
          <input name="description" placeholder="Description" value={form.description} onChange={updateForm} className="rounded-lg border px-3 py-2" />
          <div className="flex gap-2 sm:col-span-2">
            <button type="submit" className="rounded-lg bg-[#3D4F62] px-4 py-2 font-semibold text-[#F8FAFC]">Save</button>
            <button type="button" onClick={() => setEditingId(null)} className="rounded-lg border px-4 py-2 font-semibold">Cancel</button>
          </div>
        </form>
      )}

      {items.length === 0 ? <p className="p-6 text-[#3D4F62]">No items yet. Add one to show it in the booking flow.</p> : (
        <div className="divide-y">
          {items.map((item) => (
            <article key={item.id} className="flex flex-wrap items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{item.emoji || '✨'}</span>
                <div><h3 className="font-semibold">{item.name}</h3><p className="text-sm text-[#3D4F62]">{item.description}</p></div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#3D4F62]">₹{Number(item.price).toLocaleString('en-IN')}</span>
                <button onClick={() => editItem(item)} className="rounded-lg border px-3 py-2 text-sm font-semibold text-[#3D4F62]">Edit</button>
                <button onClick={() => deleteItem(item.id)} className="rounded-lg border border-[#3D4F62] px-3 py-2 text-sm font-semibold text-[#3D4F62]">Delete</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default AdminThemes
