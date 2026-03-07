const userManager = {
    users: [],
    init: function() {
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.addEventListener('click', () => this.addUser());
    },
    addUser: function() {
        const name = document.getElementById('name-input').value;
        const role = document.getElementById('role-input').value;
        const bio = document.getElementById('bio-input').value;
        const profileUrl = document.getElementById('profile-url-input').value;

        if (name && role && profileUrl) {
            const user = { name, role, bio, profileUrl };
            this.users.push(user);
            this.renderUsers();
            this.clearInputs();
        } else {
            alert('Please fill in Name, Role, and Profile URL');
        }
    },
    renderUsers: function() {
        const container = document.getElementById('users-container');
        container.innerHTML = '';

        this.users.forEach((user, index) => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <button class="delete-btn" data-index="${index}">×</button>
                <img src="${user.profileUrl}" alt="${user.name}" onerror="this.src='https://via.placeholder.com/100'">
                <h3>${user.name}</h3>
                <div class="role">${user.role}</div> 
                <div class="bio">${user.bio || 'No bio provided'}</div>
            `;
            
            const deleteBtn = userCard.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => this.removeUser(index));
            
            container.appendChild(userCard);
        });
    },
    clearInputs: function() {
        document.getElementById('name-input').value = '';
        document.getElementById('role-input').value = '';
        document.getElementById('bio-input').value = '';
        document.getElementById('profile-url-input').value = '';
    },
    removeUser: function(index) {
        this.users.splice(index, 1);
        this.renderUsers();
    }
};

userManager.init();