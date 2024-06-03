<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Para Mi Novia</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: #f9f9f9;
            color: #333;
            text-align: center;
            padding: 20px;
        }
        h1 {
            color: #e91e63;
            font-size: 3em;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2em;
        }
        .container {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 20px;
            margin: 20px auto;
            max-width: 600px;
        }
        .image-container {
            margin: 20px 0;
        }
        img {
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        button {
            background: #e91e63;
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
            transition: background 0.3s;
        }
        button:hover {
            background: #d81b60;
        }
        #extra-content {
            display: none;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Para Mi Amor</h1>
        <p>Este es un pequeño detalle para recordarte cuánto te amo.</p>
        <div class="image-container">
            <!-- Aquí está tu imagen -->
            <img src="foto1.jpeg" alt="Nuestra foto">
        </div>
        <p>Eres la persona más especial en mi vida y cada momento contigo es maravilloso.</p>
        <button onclick="showExtraContent()">Sos una chimba de mujer</button>
        <div id="extra-content">
            <img src="foto2.jpeg" alt="Otra imagen">
            <p>¡Qué hermosa mujer!</p>
        </div>
    </div>

    <script>
        function showExtraContent() {
            document.getElementById('extra-content').style.display = 'block';
        }
    </script>
</body>
</html>
