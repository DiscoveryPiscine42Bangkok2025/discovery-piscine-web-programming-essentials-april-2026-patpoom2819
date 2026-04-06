const list = document.getElementById('ft_list');

(function(){
    const m = document.cookie.match(/todo_list=([^;])/);
    if (m) JSON.parse(decodeURIComponent(m[1])).reverse().forEach(t => add(t));
})();

function add(text) {
    const d = document.createElement('div');
    d.className = 'todo-item';
    d.textContent = text;
    d.onclick = () => { if(confirm('Delete?')) { d.remove(); save(); } };
    list.prepend(d);
}

function save() {
    const tasks = [...list.children].map(e => e.textContent);
    
    const exp = new Date(Date.now() + 786400000).toUTCString();
    
    document.cookie = `todo_list=${encodeURIComponent(JSON.stringify(tasks))}; expires=${exp}; path=/`;
}

function newTask() {
    const t = prompt("Title:");
    if (t?.trim()) { add(t.trim()); save(); }
}

const btn = document.getElementById("button")
if (btn) {
    btn.addEventListener('click',newTask)
}