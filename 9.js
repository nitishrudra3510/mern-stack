<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Keyboard Events</title>

    <style>
        #btn {
            padding: 10px 14px;
            background-color: rgb(50, 50, 141);
            color: white;
            border-radius: 15px;
            font-weight: bold;
            cursor: pointer;
        }

        .hide {
            display: none;
        }
    </style>
</head>
<body>

    <h1>Keyboard Event Demo</h1>

    <p id="paragraph">
        Press H to hide me, Press S to show me.
    </p>

    <button id="btn">Click Me</button>

    <script>
        const paragraph = document.getElementById('paragraph');
        const btn = document.getElementById('btn');

        // button click
        btn.addEventListener('click', () => {
            paragraph.classList.toggle('hide');
        });

        // keyboard event
        document.addEventListener('keydown', (event) => {
            if (event.key === 'h' || event.key === 'H') {
                paragraph.classList.add('hide');
            }

            if (event.key === 's' || event.key === 'S') {
                paragraph.classList.remove('hide');
            }
        });
    </script>

</body>
</html>
