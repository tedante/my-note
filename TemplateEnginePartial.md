# Template Engine Partial

## 1. Software Engineering Principles

In software engineering field it’s common that every code that written should be easy to maintain and scalable. In order to achieve that goal, there are principles every software engineer should keep in mind.

- DRY (Don’t Repeat Yourself)
- YAGNI (You aren’t gonna need it)
- Open-Close Principle
- Separation of Concerns

## 2. Separation of Concerns

The separation of concerns is one of software engineering principle that emphasize every single thing should only do one thing and do it well. Therefore, the code should be **splitted into a chunk** of code in order to achieve the **modularity** and to be able to act independently.

## 3. Component

Component is a branch of software engineering that emphasizes the separation of concerns with respect to the wide functionality available throughout the given software system. In other words, component is a way to write a code to make it more reusable and act independently. There are few characteristics of component based system.

Secara singkatnya component itu adalah turunan dari **the separation of concerns**, dengan karateristik:
- Reusable
- Replaceable
- Extensible
- Independent
- Encapsulated

## 4. [EJS Partial (include)](https://ejs.co/#docs)

Partials are basically just views that are designed to be used from within other views. This approach is the implementation of a component.

![example1](https://raw.githubusercontent.com/teddyKoerniadi/my-note/master/images/ejspartial.png)

Contoh penggunaan include
```
<div class=”container”>
    <%- include('partials/navbar') %>
    <div class=”content”>
        <p>Body Content</p>
    </div>
    <%- include('partials/footer') %>’
</div>
```

## 5. Validation

Pastikan input user itu sesuai dengan requirement pada aplikasi.

# Referensi 
- 
