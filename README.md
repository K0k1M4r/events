# JavaScript Events & Event Handling — პრაქტიკული დავალებები

## 1. პროდუქტების რეალურ დროში ძებნა

**დავალება:** შექმენი პროდუქტების ძებნის ფუნქციონალი. მომხმარებლის მიერ საძიებო ველში ტექსტის შეყვანისას ეკრანზე უნდა დარჩეს მხოლოდ ის პროდუქტები, რომელთა სახელიც შეიცავს შეყვანილ ტექსტს.

**გამოიყენე:**

* `input` ივენთი;
* `event.target`;
* `querySelectorAll()`;
* ტექსტის შედარებისთვის `includes()`;
* `classList.add()` და `classList.remove()`.

```html
<style>
  .products {
    display: grid;
    gap: 10px;
    max-width: 400px;
  }

  .product {
    padding: 12px;
    border: 1px solid #ccc;
  }

  .hidden {
    display: none;
  }
</style>

<input id="searchInput" type="text" placeholder="Search products...">

<div class="products">
  <div class="product">Laptop</div>
  <div class="product">Smartphone</div>
  <div class="product">Headphones</div>
  <div class="product">Keyboard</div>
  <div class="product">Mouse</div>
</div>
```

**მოსალოდნელი ქცევა:** თუ მომხმარებელი ჩაწერს `"phone"`-ს, ეკრანზე უნდა დარჩეს მხოლოდ `"Smartphone"` და `"Headphones"`.

---

## 2. ხშირად დასმული კითხვების Accordion

**დავალება:** შექმენი FAQ სექცია. კითხვაზე დაჭერისას შესაბამისი პასუხი უნდა გამოჩნდეს. ხელახლა დაჭერისას პასუხი უნდა დაიმალოს.

ყველა კითხვაზე ცალკე Listener-ის დამატების ნაცვლად გამოიყენე ერთი Listener მშობელ ელემენტზე.

**გამოიყენე:**

* `click` ივენთი;
* Event Delegation;
* `event.target`;
* `closest()`;
* `classList.toggle()`.

```html
<style>
  .faq {
    max-width: 500px;
  }

  .faq-item {
    border-bottom: 1px solid #ccc;
  }

  .faq-question {
    width: 100%;
    padding: 14px;
    text-align: left;
    cursor: pointer;
  }

  .faq-answer {
    display: none;
    padding: 14px;
  }

  .faq-item.active .faq-answer {
    display: block;
  }
</style>

<div id="faqList" class="faq">
  <div class="faq-item">
    <button class="faq-question">
      <span>What is JavaScript?</span>
    </button>

    <div class="faq-answer">
      JavaScript is a programming language.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question">
      <span>What is DOM?</span>
    </button>

    <div class="faq-answer">
      DOM represents the structure of a web page.
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question">
      <span>What is an Event?</span>
    </button>

    <div class="faq-answer">
      An Event describes an action that happened in the browser.
    </div>
  </div>
</div>
```

---

## 3. Modal ფანჯრის მართვა

**დავალება:** შექმენი Modal ფანჯარა.

მომხმარებელს უნდა შეეძლოს:

* Modal-ის გახსნა ღილაკზე დაჭერით;
* Modal-ის დახურვა Close ღილაკით;
* Modal-ის დახურვა მუქ ფონზე დაჭერით;
* Modal-ის დახურვა `Escape` ღილაკით;
* Modal-ის შიგნით დაჭერისას ფანჯარა არ უნდა დაიხუროს.

**გამოიყენე:**

* `click`;
* `keydown`;
* `event.key`;
* `event.target`;
* `event.currentTarget`;
* `stopPropagation()`.

```html
<style>
  .modal-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgb(0 0 0 / 60%);
    align-items: center;
    justify-content: center;
  }

  .modal-overlay.open {
    display: flex;
  }

  .modal {
    width: 320px;
    padding: 24px;
    background: white;
    border-radius: 8px;
  }
</style>

<button id="openModalBtn">Open Modal</button>

<div id="modalOverlay" class="modal-overlay">
  <div class="modal">
    <h2>Confirmation</h2>
    <p>Are you sure you want to continue?</p>

    <button id="confirmBtn">Confirm</button>
    <button id="closeModalBtn">Close</button>
  </div>
</div>
```

---

## 4. სარეგისტრაციო ფორმის ვალიდაცია

**დავალება:** შექმენი ფორმის ვალიდაცია.

ფორმის გაგზავნისას:

* გვერდი არ უნდა გადაიტვირთოს;
* სახელი არ უნდა იყოს ცარიელი;
* email უნდა შეიცავდეს `"@"` სიმბოლოს;
* პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს;
* შეცდომის მქონე input-ს დაემატოს `invalid` კლასი;
* სწორი ფორმის შემთხვევაში გამოჩნდეს წარმატების შეტყობინება.

**გამოიყენე:**

* `submit`;
* `input`;
* `focus`;
* `event.preventDefault()`;
* `event.target`;
* `classList`.

```html
<style>
  .form-group {
    margin-bottom: 14px;
  }

  input {
    display: block;
    width: 280px;
    padding: 10px;
    border: 1px solid #aaa;
  }

  input.invalid {
    border-color: red;
  }

  .error {
    min-height: 18px;
    color: red;
    font-size: 14px;
  }

  .success {
    color: green;
  }
</style>

<form id="registrationForm">
  <div class="form-group">
    <input id="nameInput" type="text" placeholder="Name">
    <div class="error"></div>
  </div>

  <div class="form-group">
    <input id="emailInput" type="text" placeholder="Email">
    <div class="error"></div>
  </div>

  <div class="form-group">
    <input id="passwordInput" type="password" placeholder="Password">
    <div class="error"></div>
  </div>

  <button type="submit">Register</button>
</form>

<p id="formStatus"></p>
```

---

## 5. კლავიატურის Shortcut-ები

**დავალება:** შექმენი კლავიატურის Shortcut-ების სისტემა.

* `Escape` ღილაკზე დაჭერისას დაიმალოს შეტყობინება;
* `Enter` ღილაკზე დაჭერისას გამოჩნდეს შეტყობინება;
* `Space` ღილაკზე დაჭერისას შეიცვალოს გვერდის თემა;
* კონსოლში დაიბეჭდოს `event.key` და `event.code`.

**გამოიყენე:**

* `keydown`;
* `event.key`;
* `event.code`;
* `classList.toggle()`.

```html
<style>
  body {
    transition: 0.2s;
  }

  body.dark {
    background: #151515;
    color: white;
  }

  .message {
    padding: 20px;
    border: 1px solid #aaa;
  }

  .hidden {
    display: none;
  }
</style>

<h1>Keyboard Shortcuts</h1>

<p id="shortcutMessage" class="message">
  Press Escape, Enter or Space
</p>
```

---

## 6. Drag and Drop დავალებების დაფა

**დავალება:** შექმენი მარტივი Kanban Board.

მომხმარებელს უნდა შეეძლოს დავალების ერთი სვეტიდან მეორეში გადატანა.

**გამოიყენე:**

* `dragstart`;
* `dragend`;
* `dragover`;
* `drop`;
* `event.preventDefault()`;
* `event.target`;
* `event.currentTarget`;
* `classList`.

```html
<style>
  .board {
    display: flex;
    gap: 20px;
  }

  .column {
    width: 250px;
    min-height: 300px;
    padding: 15px;
    background: #eee;
    border: 2px dashed transparent;
  }

  .column.drag-over {
    border-color: #333;
  }

  .task {
    margin-bottom: 10px;
    padding: 12px;
    background: white;
    cursor: grab;
  }

  .task.dragging {
    opacity: 0.4;
  }
</style>

<div class="board">
  <div class="column" data-status="todo">
    <h2>To Do</h2>

    <div class="task" draggable="true">Learn Events</div>
    <div class="task" draggable="true">Build Modal</div>
  </div>

  <div class="column" data-status="progress">
    <h2>In Progress</h2>

    <div class="task" draggable="true">Practice DOM</div>
  </div>

  <div class="column" data-status="done">
    <h2>Done</h2>
  </div>
</div>
```

---

## 7. დინამიური Todo List

**დავალება:** შექმენი Todo List.

მომხმარებელს უნდა შეეძლოს:

* ახალი დავალების დამატება;
* ცარიელი დავალების დამატების შეზღუდვა;
* დავალების დასრულებულად მონიშვნა;
* დავალების წაშლა;
* დინამიურად დამატებული ელემენტების მართვა ერთი Listener-ით.

**გამოიყენე:**

* `submit`;
* `preventDefault()`;
* Event Delegation;
* `closest()`;
* `classList.toggle()`;
* `createElement()`.

```html
<style>
  .completed .task-text {
    text-decoration: line-through;
    opacity: 0.5;
  }

  li {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
  }
</style>

<form id="todoForm">
  <input id="todoInput" type="text" placeholder="Enter task">
  <button type="submit">Add Task</button>
</form>

<p id="todoError"></p>

<ul id="todoList">
  <li>
    <span class="task-text">Learn JavaScript Events</span>

    <button class="complete-btn">
      <span>Complete</span>
    </button>

    <button class="delete-btn">
      <span>Delete</span>
    </button>
  </li>
</ul>
```

---

## 8. პროდუქტების კატეგორიებით ფილტრაცია

**დავალება:** შექმენი პროდუქტების კატეგორიებით ფილტრაციის სისტემა.

კატეგორიის ღილაკზე დაჭერისას უნდა გამოჩნდეს შესაბამისი პროდუქტები. `"All"` ღილაკმა ყველა პროდუქტი უნდა გამოაჩინოს.

ყველა ღილაკისთვის გამოიყენე ერთი საერთო Listener.

**გამოიყენე:**

* Event Delegation;
* `event.target`;
* `closest()`;
* `dataset`;
* `classList`.

```html
<style>
  .filters {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
  }

  .filter-btn.active {
    background: black;
    color: white;
  }

  .product.hidden {
    display: none;
  }

  .product {
    padding: 12px;
    border: 1px solid #ccc;
    margin-bottom: 8px;
  }
</style>

<div id="filterButtons" class="filters">
  <button class="filter-btn active" data-category="all">All</button>
  <button class="filter-btn" data-category="electronics">Electronics</button>
  <button class="filter-btn" data-category="books">Books</button>
  <button class="filter-btn" data-category="clothes">Clothes</button>
</div>

<div id="productContainer">
  <div class="product" data-category="electronics">Laptop</div>
  <div class="product" data-category="books">JavaScript Book</div>
  <div class="product" data-category="clothes">T-Shirt</div>
  <div class="product" data-category="electronics">Smartphone</div>
  <div class="product" data-category="books">CSS Book</div>
</div>
```

---

## 9. Tabs კომპონენტი

**დავალება:** შექმენი Tabs კომპონენტი.

Tab ღილაკზე დაჭერისას:

* აქტიური ღილაკი უნდა შეიცვალოს;
* გამოჩნდეს შესაბამისი კონტენტი;
* დანარჩენი კონტენტი დაიმალოს.

ყველა Tab-ის სამართავად გამოიყენე ერთი Listener.

**გამოიყენე:**

* `click`;
* Event Delegation;
* `dataset`;
* `event.target`;
* `classList`.

```html
<style>
  .tab-buttons {
    display: flex;
    gap: 8px;
  }

  .tab-button.active {
    background: black;
    color: white;
  }

  .tab-content {
    display: none;
    padding: 20px;
    border: 1px solid #ccc;
  }

  .tab-content.active {
    display: block;
  }
</style>

<div id="tabs">
  <div class="tab-buttons">
    <button class="tab-button active" data-tab="profile">Profile</button>
    <button class="tab-button" data-tab="settings">Settings</button>
    <button class="tab-button" data-tab="security">Security</button>
  </div>

  <div id="profile" class="tab-content active">
    Profile content
  </div>

  <div id="settings" class="tab-content">
    Settings content
  </div>

  <div id="security" class="tab-content">
    Security content
  </div>
</div>
```

---

## 10. Dropdown მენიუს მართვა

**დავალება:** შექმენი Dropdown მენიუ.

* ღილაკზე დაჭერისას მენიუ უნდა გამოჩნდეს;
* ხელახლა დაჭერისას უნდა დაიმალოს;
* გვერდის ნებისმიერ სხვა ადგილზე დაჭერისას მენიუ უნდა დაიხუროს;
* მენიუს შიგნით დაჭერამ არ უნდა გამოიწვიოს არასასურველი დახურვა.

**გამოიყენე:**

* `click`;
* Event Bubbling;
* `stopPropagation()`;
* `classList.toggle()`.

```html
<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    min-width: 160px;
    padding: 10px;
    background: white;
    border: 1px solid #ccc;
  }

  .dropdown-menu.open {
    display: block;
  }
</style>

<div id="dropdown" class="dropdown">
  <button id="dropdownBtn">Open Menu</button>

  <div id="dropdownMenu" class="dropdown-menu">
    <a href="#">Profile</a>
    <a href="#">Settings</a>
    <a href="#">Logout</a>
  </div>
</div>
```

---

## 11. სურათების გალერეა

**დავალება:** შექმენი სურათების გალერეა.

Thumbnail-ზე დაჭერისას მთავარი სურათის `src` და `alt` ატრიბუტები უნდა შეიცვალოს.

Thumbnail-ებისთვის გამოიყენე ერთი Listener მშობელ ელემენტზე.

**გამოიყენე:**

* Event Delegation;
* `event.target`;
* `closest()`;
* `getAttribute()`;
* `setAttribute()`.

```html
<style>
  .main-image {
    display: block;
    width: 400px;
    height: 250px;
    object-fit: cover;
    margin-bottom: 12px;
  }

  .thumbnails {
    display: flex;
    gap: 10px;
  }

  .thumbnail {
    width: 90px;
    height: 60px;
    object-fit: cover;
    cursor: pointer;
  }
</style>

<img
  id="mainImage"
  class="main-image"
  src="https://picsum.photos/id/10/400/250"
  alt="Main image"
>

<div id="thumbnailContainer" class="thumbnails">
  <img
    class="thumbnail"
    src="https://picsum.photos/id/10/400/250"
    alt="Forest"
  >

  <img
    class="thumbnail"
    src="https://picsum.photos/id/20/400/250"
    alt="Desk"
  >

  <img
    class="thumbnail"
    src="https://picsum.photos/id/30/400/250"
    alt="Cup"
  >
</div>
```

---

## 12. Input-ის სიმბოლოების მრიცხველი

**დავალება:** შექმენი ტექსტის სიმბოლოების მრიცხველი.

* მომხმარებელს შეუძლია მაქსიმუმ 100 სიმბოლოს შეყვანა;
* აკრეფისას გამოჩნდეს დარჩენილი სიმბოლოების რაოდენობა;
* ლიმიტის მიღწევისას მრიცხველს დაემატოს `limit` კლასი;
* ცალკე გამოიტანე მომხდარი ივენთის ტიპი.

**გამოიყენე:**

* `input`;
* `event.target`;
* `event.type`;
* `classList`.

```html
<style>
  textarea {
    width: 320px;
    height: 120px;
  }

  .limit {
    color: red;
    font-weight: bold;
  }
</style>

<textarea
  id="bioInput"
  maxlength="100"
  placeholder="Write something about yourself..."
></textarea>

<p>
  Remaining characters:
  <span id="remainingCount">100</span>
</p>

<p>
  Last event:
  <span id="eventType">-</span>
</p>
```

---

## 13. Start და Stop Mouse Tracker

**დავალება:** შექმენი მაუსის კოორდინატების Tracker.

* `"Start Tracking"` ღილაკზე დაჭერის შემდეგ დაიწყოს მაუსის კოორდინატების ჩვენება;
* `"Stop Tracking"` ღილაკზე დაჭერის შემდეგ Listener უნდა მოიხსნას;
* Listener-ის რამდენჯერმე დამატება არ უნდა იწვევდეს Handler-ის განმეორებით შესრულებას.

**გამოიყენე:**

* `mousemove`;
* `addEventListener()`;
* `removeEventListener()`;
* სახელდებული Handler ფუნქცია;
* იგივე ფუნქციის Reference.

```html
<style>
  .tracker {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
  }
</style>

<button id="startTrackingBtn">Start Tracking</button>
<button id="stopTrackingBtn">Stop Tracking</button>

<div class="tracker">
  <p>X: <span id="mouseX">0</span></p>
  <p>Y: <span id="mouseY">0</span></p>
</div>
```

---

## 14. ღილაკის დროებითი გააქტიურება

**დავალება:** შექმენი ღილაკი, რომელიც თავდაპირველად არ რეაგირებს დაჭერაზე.

* `"Enable"` ღილაკმა უნდა დაამატოს Listener;
* `"Disable"` ღილაკმა უნდა მოხსნას Listener;
* ძირითად ღილაკზე დაჭერისას მრიცხველი გაიზარდოს;
* `removeEventListener()`-ისთვის არ გამოიყენო ახალი ანონიმური ფუნქცია.

**გამოიყენე:**

* `addEventListener()`;
* `removeEventListener()`;
* ფუნქციის Reference;
* `click`.

```html
<button id="enableBtn">Enable</button>
<button id="disableBtn">Disable</button>

<button id="actionBtn">Run Action</button>

<p>
  Action count:
  <span id="actionCount">0</span>
</p>
```

---

## 15. რამდენიმე Listener ერთ ღილაკზე

**დავალება:** ერთ ღილაკს დაუმატე სამი სხვადასხვა `click` Listener.

პირველმა Listener-მა:

* შეცვალოს ღილაკის ტექსტი.

მეორემ:

* გაზარდოს დაჭერების რაოდენობა.

მესამემ:

* კონსოლში დაბეჭდოს `event.type`.

ფუნქციები უნდა შესრულდეს იმავე თანმიმდევრობით, რომლითაც Listener-ები დაემატა.

```html
<button id="multiActionBtn">Perform Action</button>

<p>
  Click count:
  <span id="multiClickCount">0</span>
</p>
```

---

## 16. Nested ღილაკების მართვა `closest()`-ით

**დავალება:** შექმენი მომხმარებლების სია.

ყველა მომხმარებლის ბარათში არის Edit და Delete ღილაკები, რომლებშიც დამატებით მოთავსებულია `span` ელემენტები.

მშობელ ელემენტზე გამოიყენე ერთი Listener და დაადგინე:

* რომელ ღილაკზე დააჭირა მომხმარებელმა;
* რომელ ბარათს ეკუთვნის ღილაკი;
* Delete ღილაკზე ბარათი წაშალე;
* Edit ღილაკზე მომხმარებლის სახელი შეცვალე.

**გამოიყენე:**

* Event Delegation;
* `closest()`;
* `dataset`;
* `event.target`;
* `remove()`.

```html
<style>
  .user-card {
    margin-bottom: 10px;
    padding: 14px;
    border: 1px solid #ccc;
  }
</style>

<div id="userList">
  <div class="user-card" data-user-id="1">
    <span class="user-name">Nika</span>

    <button class="edit-btn">
      <span>Edit</span>
    </button>

    <button class="delete-btn">
      <span>Delete</span>
    </button>
  </div>

  <div class="user-card" data-user-id="2">
    <span class="user-name">Mariam</span>

    <button class="edit-btn">
      <span>Edit</span>
    </button>

    <button class="delete-btn">
      <span>Delete</span>
    </button>
  </div>
</div>
```

---

## 17. ბმულის დეფოლტ ქცევის კონტროლი

**დავალება:** შექმენი გარე ბმული.

ბმულზე დაჭერისას:

* გვერდი დაუყოვნებლივ არ უნდა გადავიდეს სხვა მისამართზე;
* მომხმარებელს უნდა გამოუჩნდეს დადასტურების შეტყობინება;
* დადასტურების შემთხვევაში გახსენი ბმული;
* გაუქმების შემთხვევაში დარჩი მიმდინარე გვერდზე.

**გამოიყენე:**

* `click`;
* `event.preventDefault()`;
* `event.currentTarget`;
* `getAttribute()`.

```html
<a
  id="externalLink"
  href="https://developer.mozilla.org"
  target="_blank"
>
  Open MDN Documentation
</a>

<p id="linkStatus"></p>
```

---

## 18. ვარსკვლავებით შეფასების სისტემა

**დავალება:** შექმენი ხუთვარსკვლავიანი შეფასების სისტემა.

* ვარსკვლავზე მაუსის გადატარებისას დროებით მონიშნე შესაბამისი და ყველა წინა ვარსკვლავი;
* მაუსის გატანისას დროებითი მონიშვნა გააქრე;
* დაჭერისას შეინახე არჩეული შეფასება;
* შეფასება გამოიტანე ტექსტის სახით.

ყველა ვარსკვლავისთვის გამოიყენე ერთი Listener მშობელ ელემენტზე.

**გამოიყენე:**

* `mouseover`;
* `mouseout`;
* `click`;
* Event Delegation;
* `event.target`;
* `dataset`;
* `classList`.

```html
<style>
  .stars {
    display: flex;
    gap: 8px;
    font-size: 36px;
  }

  .star {
    cursor: pointer;
    color: #aaa;
  }

  .star.active {
    color: gold;
  }
</style>

<div id="rating" class="stars">
  <span class="star" data-value="1">★</span>
  <span class="star" data-value="2">★</span>
  <span class="star" data-value="3">★</span>
  <span class="star" data-value="4">★</span>
  <span class="star" data-value="5">★</span>
</div>

<p>
  Selected rating:
  <span id="ratingValue">0</span>
</p>
```

---

## 19. Capturing და Bubbling ექსპერიმენტი

**დავალება:** ქვემოთ მოცემულ სამივე ელემენტს დაუმატე `click` Listener.

პირველ ეტაპზე Listener-ები გაუშვი ჩვეულებრივ Bubbling ფაზაში და ჩაიწერე შესრულების თანმიმდევრობა.

მეორე ეტაპზე:

* `outer` ელემენტის Listener გაუშვი Capturing ფაზაში;
* `middle` და `inner` Listener-ები დატოვე Bubbling ფაზაში;
* შეადარე შესრულების თანმიმდევრობა.

ღილაკზე დაჭერისას კონსოლში ასევე დაბეჭდე:

* `event.target`;
* `event.currentTarget`;
* `event.type`.

```html
<style>
  #outer {
    padding: 40px;
    background: lightblue;
  }

  #middle {
    padding: 40px;
    background: lightgreen;
  }

  #inner {
    padding: 20px;
  }
</style>

<div id="outer">
  Outer

  <div id="middle">
    Middle

    <button id="inner">
      Inner Button
    </button>
  </div>
</div>
```

---

## 20. დინამიური პროდუქტების Dashboard

**დავალება:** შექმენი პროდუქტების მართვის პატარა Dashboard.

მომხმარებელს უნდა შეეძლოს:

* ფორმიდან ახალი პროდუქტის დამატება;
* ცარიელი სახელის შეზღუდვა;
* პროდუქტის კატეგორიის არჩევა;
* პროდუქტების ტექსტით ძებნა;
* კატეგორიით გაფილტვრა;
* პროდუქტის წაშლა;
* პროდუქტის Featured მდგომარეობის ჩართვა ან გამორთვა;
* დინამიურად დამატებული პროდუქტების მართვა;
* მხოლოდ ერთი Listener-ის გამოყენება პროდუქტების კონტეინერზე.

**გამოიყენე:**

* `submit`;
* `input`;
* `click`;
* `preventDefault()`;
* Event Delegation;
* `closest()`;
* `dataset`;
* `createElement()`;
* `classList.toggle()`.

```html
<style>
  .controls {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .product-card {
    margin-bottom: 10px;
    padding: 15px;
    border: 1px solid #ccc;
  }

  .product-card.featured {
    border: 2px solid gold;
    background: #fffbea;
  }

  .product-card.hidden {
    display: none;
  }
</style>

<form id="productForm">
  <input id="productNameInput" type="text" placeholder="Product name">

  <select id="productCategoryInput">
    <option value="electronics">Electronics</option>
    <option value="books">Books</option>
    <option value="clothes">Clothes</option>
  </select>

  <button type="submit">Add Product</button>
</form>

<p id="productError"></p>

<div class="controls">
  <input id="productSearchInput" type="text" placeholder="Search products">

  <select id="categoryFilter">
    <option value="all">All categories</option>
    <option value="electronics">Electronics</option>
    <option value="books">Books</option>
    <option value="clothes">Clothes</option>
  </select>
</div>

<div id="productList">
  <article class="product-card" data-category="electronics">
    <h3 class="product-name">Laptop</h3>
    <p>Electronics</p>

    <button class="feature-btn">
      <span>Toggle Featured</span>
    </button>

    <button class="delete-btn">
      <span>Delete</span>
    </button>
  </article>

  <article class="product-card" data-category="books">
    <h3 class="product-name">JavaScript Book</h3>
    <p>Books</p>

    <button class="feature-btn">
      <span>Toggle Featured</span>
    </button>

    <button class="delete-btn">
      <span>Delete</span>
    </button>
  </article>
</div>
```
