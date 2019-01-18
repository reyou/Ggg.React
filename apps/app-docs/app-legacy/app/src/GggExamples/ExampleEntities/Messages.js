export default function Messages() {
  let messages = [];
  for (let i = 0; i < 10; i++) {
    messages.push({ title: "message " + i });
  }
  return messages;
}
