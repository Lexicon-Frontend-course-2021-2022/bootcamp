
/* ---- Don't change anything between here --- */

const teacher = {
    name: 'Max',
    age: 31,
    boring: 'Sometimes',
    fun: true
};

/* --- And here --- */

// Print out to document, on a new line, the key / value pairs of the object.

for (key in teacher) {
    document.writeln(`<br>${key}: ${teacher[key]}`);
}