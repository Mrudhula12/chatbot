let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let input = document.getElementById("userInput")
let div = document.getElementById("chatContainer")
let send = document.getElementById("sendMsgBtn")
let n = -1
send.onclick = function() {
    n = n + 1
    let i = input.value
    let y = document.createElement("div")
    y.classList.add("msg-to-chatbot-container")
    div.appendChild(y)
    let x = document.createElement("span")
    x.textContent = i
    x.classList.add("msg-to-chatbot")
    y.appendChild(x)
    let y1 = document.createElement("div")
    y1.classList.add("msg-from-chatbot-container")
    div.appendChild(y1)
    let x1 = document.createElement("span")
    x1.textContent = chatbotMsgList[n]
    x1.classList.add("msg-from-chatbot")
    y1.appendChild(x1)
    input.value = ""
}