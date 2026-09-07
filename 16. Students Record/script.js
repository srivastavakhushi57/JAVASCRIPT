const students = [
    {
        name: "Khushi Srivastava",
        marks: 90,
        class: "B.TECH CSE DS",
        address: "Ghaziabad",
    },

    {
        name: "Avika Bhardwaj",
        marks: "98",
        class: "B.Sc",
        address: "Delhi",
    },

    {
        name: "Gauri Jain",
        marks: "95",
        class: "B.TECH CSE",
        address: "Meerut",
    },

    {
        name: "Janvi Gulati",
        marks: "80",
        class: "B.TECH IT",
        address: "Meerut",
    },

    {
        name: "Mahi Arora",
        marks: "84",
        class: "B.TECH CSE AIML",
        address: "Amroha",
    },

    {
        name: "Mahak Singh",
        marks: "80",
        class: "ELCE",
        address: "Hapur",
    },

    {
        name: "Rahul Sharma",
        marks: "60",
        class: "B.Sc",
        address: "Noida",
    },

    {
        name: "Riya Sharma",
        marks: "92",
        class: "B.Tech CSE",
        address: "Noida",
    },

    {
        name: "Ananya Verma",
        marks: "87",
        class: "B.Tech IT",
        address: "Lucknow",
    },

    {
        name: "Simran Kapoor",
        marks: "94",
        class: "B.Sc",
        address: "Delhi",
    },

    {
        name: "Aarav Mehta",
        marks: "81",
        class: "B.Tech CSE DS",
        address: "Ghaziabad",
    },

    {
        name: "Kavya Singh",
        marks: "89",
        class: "B.Tech AIML",
        address: "Meerut",
    },

    {
        name: "Aditya Gupta",
        marks: "76",
        class: "B.Tech IT",
        address: "Hapur",
    },

    {
        name: "Ishita Jain",
        marks: "96",
        class: "B.Tech CSE",
        address: "Agra",
    },

    {
        name: "Arjun Malhotra",
        marks: "85",
        class: "B.Sc",
        address: "Jaipur",
    },

    {
        name: "Sneha Yadav",
        marks: "91",
        class: "B.Tech CSE DS",
        address: "Faridabad",
    },

    {
        name: "Rohan Verma",
        marks: "79",
        class: "B.Tech AIML",
        address: "Gurugram",
    },

    {
        name: "Nisha Agarwal",
        marks: "88",
        class: "B.Tech CSE",
        address: "Kanpur",
    },

    {
        name: "Yash Thakur",
        marks: "93",
        class: "B.Tech CSE DS",
        address: "Mathura",
    },
    
    {
        name: "Pooja Mishra",
        marks: "82",
        class: "B.Sc",
        address: "Varanasi",
    },
];


function displayStudents(studentList) {

    const container = document.getElementById("studentContainer");

    container.innerHTML = studentList.map(function(student) {

        return `
            <div class="student-card">

                <h2>${student.name}</h2>

                <p>
                    <span>Marks:</span>
                    ${student.marks}
                </p>

                <p>
                    <span>Class:</span>
                    ${student.class}
                </p>

                <p>
                    <span>Address:</span>
                    ${student.address}
                </p>

            </div>
        `;

    }).join("");

}


displayStudents(students);

document
    .getElementById("searchBox")
    .addEventListener("input", function() {

        const searchText = this.value.toLowerCase();
        const filteredStudents = students.filter(function(student) {
            return student.name
                .toLowerCase()
                .includes(searchText);
        });
        displayStudents(filteredStudents);
    });