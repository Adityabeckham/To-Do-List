// Mengambil elemen-elemen dari DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Fungsi untuk menambahkan tugas ke daftar
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") return; // Jangan tambahkan jika input kosong

    const li = document.createElement("li");

    // Menambahkan teks tugas ke elemen <li>
    li.textContent = taskText;

    // Membuat tombol untuk menandai tugas selesai
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Selesai";
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Membuat tombol untuk menghapus tugas
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    // Menambahkan tombol ke dalam elemen <li>
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Menambahkan <li> ke dalam daftar tugas
    taskList.appendChild(li);

    // Mengosongkan input setelah tugas ditambahkan
    taskInput.value = "";
}

// Menambahkan event listener pada tombol "Tambah Tugas"
addTaskBtn.addEventListener("click", addTask);

// Menambahkan event listener pada Enter key agar bisa menambah tugas juga
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
