document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send-button').addEventListener('click', sendMessage);
    document.getElementById('message-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    document.getElementById('send-image-button').addEventListener('click', function() {
        document.getElementById('image-input').click();
    });

    document.getElementById('image-input').addEventListener('change', previewImage);

    document.querySelectorAll('.emoticon').forEach(emoticon => {
        emoticon.addEventListener('click', function() {
            document.getElementById('message-input').value += emoticon.textContent;
        });
    });

    window.addEventListener('storage', function(event) {
        if (event.key === 'messages') {
            loadMessages();
        }
    });

    loadMessages();
});

let imageFile = null;

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    const imagePreview = document.getElementById('image-preview');

    if (message || imageFile) {
<<<<<<< HEAD
        const messageId = Date.now();
        const currentTime = getCurrentTime();

=======
        const messageId = Date.now();  
>>>>>>> dc4534ec0a722bb2ec5be8f3ea882e18f59e5d1a
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
<<<<<<< HEAD
                addMessageToChat('Vous', `${message}<br><img src="${imageUrl}" alt="Image" class="chat-image">`, messageId, currentTime, true);
                saveMessage('Vous', { text: message, image: imageUrl }, messageId, 'image', currentTime);
                imageFile = null;
                imagePreview.style.display = 'none';
                imagePreview.innerHTML = '';
            };
            reader.readAsDataURL(imageFile);
        } else {
            addMessageToChat('Vous', message, messageId, currentTime, false);
            saveMessage('Vous', message, messageId, 'text', currentTime);
=======
                addMessageToChat('Vous', `${message}<br><img src="${imageUrl}" alt="Image" class="chat-image">`, messageId, true);
                saveMessage('Vous', { text: message, image: imageUrl }, messageId, 'image');
                imageFile = null;  
                imagePreview.style.display = 'none';
                imagePreview.innerHTML = '';  
            };
            reader.readAsDataURL(imageFile);
        } else {
            addMessageToChat('Vous', message, messageId, false);
            saveMessage('Vous', message, messageId);
>>>>>>> dc4534ec0a722bb2ec5be8f3ea882e18f59e5d1a
        }
        messageInput.value = '';
        sendNotification('Nouveau message', message || 'Vous avez envoyé une image', messageId);
    }
}

function previewImage(event) {
    imageFile = event.target.files[0];
    const messageInput = document.getElementById('message-input');
    const imagePreview = document.getElementById('image-preview');
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.style.display = 'block';
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Aperçu de l'image" style="max-width: 50px; max-height: 50px; vertical-align: middle;">`;
<<<<<<< HEAD
            messageInput.style.paddingLeft = '60px';
=======
            messageInput.style.paddingLeft = '60px';  
>>>>>>> dc4534ec0a722bb2ec5be8f3ea882e18f59e5d1a
        };
        reader.readAsDataURL(imageFile);
    } else {
        imagePreview.style.display = 'none';
        imagePreview.innerHTML = '';
<<<<<<< HEAD
        messageInput.style.paddingLeft = '10px';
    }
}

function addMessageToChat(user, message, messageId, time, isImage) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message';
    messageElement.dataset.messageId = messageId;
    messageElement.innerHTML = `<span class="message-header">${user} - ${time}:</span> ${message}
        <button class="delete-button" onclick="deleteMessage(${messageId})">
            <img src="icons/delete-icon.png" alt="Supprimer">
        </button>`;

=======
        messageInput.style.paddingLeft = '10px';  
    }
}

function addMessageToChat(user, message, messageId, isImage) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message';
    messageElement.dataset.messageId = messageId;  
    messageElement.innerHTML = `${user}: ${message} 
        <button class="delete-button" onclick="deleteMessage(${messageId})">
            <img src="icons/delete-icon.png" alt="Supprimer">
        </button>`;
    
>>>>>>> dc4534ec0a722bb2ec5be8f3ea882e18f59e5d1a
    if (isImage) {
        messageElement.innerHTML += `<button class="download-button" onclick="downloadImage(${messageId})">
            <img src="icons/download-icon.png" alt="Télécharger">
        </button>`;
    }
<<<<<<< HEAD

=======
    
>>>>>>> dc4534ec0a722bb2ec5be8f3ea882e18f59e5d1a
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function deleteMessage(messageId) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages = messages.filter(message => message.id !== messageId);
    localStorage.setItem('messages', JSON.stringify(messages));
    loadMessages();
}

<<<<<<< HEAD
function saveMessage(user, message, messageId, type = 'text', time) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ user, message, id: messageId, type, time });
=======
function saveMessage(user, message, messageId, type = 'text') {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ user, message, id: messageId, type });
>>>>>>> dc4534ec0a722bb2ec5be8f3ea882e18f59e5d1a
    localStorage.setItem('messages', JSON.stringify(messages));
}

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    const chatBox = document.getElementById('chat-box');
<<<<<<< HEAD
    chatBox.innerHTML = '';
    messages.forEach(message => {
        if (message.type === 'text') {
            addMessageToChat(message.user, message.message, message.id, message.time, false);
        } else if (message.type === 'image') {
            addMessageToChat(message.user, `${message.message.text}<br><img src="${message.message.image}" alt="Image" class="chat-image">`, message.id, message.time, true);
=======
    chatBox.innerHTML = '';  
    messages.forEach(message => {
        if (message.type === 'text') {
            addMessageToChat(message.user, message.message, message.id, false);
        } else if (message.type === 'image') {
            addMessageToChat(message.user, `${message.message.text}<br><img src="${message.message.image}" alt="Image" class="chat-image">`, message.id, true);
>>>>>>> dc4534ec0a722bb2ec5be8f3ea882e18f59e5d1a
        }
    });
}

function sendNotification(title, body, messageId) {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(title, {
                body,
<<<<<<< HEAD
                data: { messageId },
                tag: messageId,
=======
                data: { messageId },  
                tag: messageId,  
>>>>>>> dc4534ec0a722bb2ec5be8f3ea882e18f59e5d1a
                renotify: true
            });
        });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                navigator.serviceWorker.ready.then(function(registration) {
                    registration.showNotification(title, {
                        body,
                        data: { messageId },
                        tag: messageId,
                        renotify: true
                    });
                });
            }
        });
    }
}

function downloadImage(messageId) {
    const messageElement = document.querySelector(`div[data-message-id="${messageId}"]`);
    const img = messageElement.querySelector('img.chat-image');
    const a = document.createElement('a');
    a.href = img.src;
    a.download = 'image.png';
    a.click();
}
<<<<<<< HEAD

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}
=======
>>>>>>> dc4534ec0a722bb2ec5be8f3ea882e18f59e5d1a
