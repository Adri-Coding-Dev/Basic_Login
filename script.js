// Sistema de Matrix Rain
        function createMatrixRain() {
            const matrixBg = document.getElementById('matrixBg');
            const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            
            function createColumn() {
                const column = document.createElement('div');
                column.className = 'matrix-column';
                column.style.left = Math.random() * window.innerWidth + 'px';
                column.style.animationDuration = (Math.random() * 3 + 2) + 's';
                
                let text = '';
                for (let i = 0; i < 20; i++) {
                    text += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
                }
                column.innerHTML = text;
                
                matrixBg.appendChild(column);
                
                setTimeout(() => {
                    matrixBg.removeChild(column);
                }, 5000);
            }
            
            setInterval(createColumn, 100);
        }

        // Inicializar efectos
        createMatrixRain();

        // Sistema de almacenamiento en memoria
        let users = {};

        // Funciones para cambiar entre formularios
        function showRegister() {
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('registerForm').classList.remove('hidden');
        }

        function showLogin() {
            document.getElementById('registerForm').classList.add('hidden');
            document.getElementById('loginForm').classList.remove('hidden');
        }

        // Registro de usuarios
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('regUsername').value;
            const password = document.getElementById('regPassword').value;
            const email = document.getElementById('regEmail').value;
            const errorDiv = document.getElementById('registerError');

            // Validaciones
            if (users[username]) {
                errorDiv.innerHTML = '<div class="error-message">El usuario ya existe</div>';
                return;
            }

            if (password.length < 6) {
                errorDiv.innerHTML = '<div class="error-message">La contraseña debe tener al menos 6 caracteres</div>';
                return;
            }

            // Crear usuario
            users[username] = {
                password: password,
                email: email,
                registered: new Date().toISOString()
            };

            errorDiv.innerHTML = '<div class="access-granted">Usuario registrado exitosamente</div>';
            
            setTimeout(() => {
                showLogin();
                errorDiv.innerHTML = '';
            }, 2000);
        });

        // Login de usuarios
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const errorDiv = document.getElementById('loginError');

            // Validar credenciales
            if (!users[username]) {
                errorDiv.innerHTML = '<div class="error-message">Usuario no encontrado</div>';
                return;
            }

            if (users[username].password !== password) {
                errorDiv.innerHTML = '<div class="error-message">Contraseña incorrecta</div>';
                return;
            }

            // Login exitoso
            errorDiv.innerHTML = '<div class="access-granted">Acceso concedido<span class="loading"></span></div>';
            
            setTimeout(() => {
                showTerminal(username);
            }, 2000);
        });

        // Mostrar terminal con animación
        function showTerminal(username) {
            document.getElementById('terminalContainer').style.display = 'block';
            
            const terminalContent = document.getElementById('terminalContent');
            const lines = [
                '> Iniciando secuencia de autenticación...',
                '> Verificando credenciales...',
                '> Acceso concedido para usuario: ' + username,
                '> Cargando perfil de usuario...',
                '> Estableciendo conexión segura...',
                '> Inicializando interfaz de usuario...',
                '> Sistema operativo: NEXUS OS v2.1.5',
                '> Estado de la red: SEGURA',
                '> Nivel de acceso: ADMINISTRADOR',
                '> ',
                ' ██╗       ██████╗   ██████╗  ██╗ ███╗   ██╗',
                ' ██║      ██╔═══██╗ ██╔════╝  ██║ ████╗  ██║',
                ' ██║      ██║   ██║ ██║  ███╗ ██║ ██╔██╗ ██║',
                ' ██║      ██║   ██║ ██║   ██║ ██║ ██║╚██╗██║',
                ' ███████╗ ╚██████╔╝ ╚██████╔╝ ██║ ██║ ╚████║',
                ' ╚══════╝  ╚═════╝   ╚═════╝  ╚═╝ ╚═╝  ╚═══╝',
                '',
                ' ███████╗ ██╗  ██╗ ██╗ ████████╗ ██████╗  ███████╗ ██████╗ ',
                ' ██╔════╝ ╚██╗██╔╝ ██║ ╚══██╔══╝██╔═══██╗ ██╔════╝██╔═══██╗',
                ' █████╗    ╚███╔╝  ██║    ██║   ██║   ██║ ███████╗██║   ██║',
                ' ██╔══╝    ██╔██╗  ██║    ██║   ██║   ██║ ╚════██║██║   ██║',
                ' ███████╗ ██╔╝ ██╗ ██║    ██║   ╚██████╔╝ ███████║╚██████╔╝',
                ' ╚══════╝ ╚═╝  ╚═╝ ╚═╝    ╚═╝    ╚═════╝  ╚══════╝ ╚═════╝',
                '> ',
                '> Bienvenido al sistema NEXUS',
                '> Todos los sistemas funcionando correctamente',
                '> Usuario: ' + username + ' | Acceso: TOTAL',
                '> Fecha: ' + new Date().toLocaleString(),
                '> ',
                '> LOGIN EXITOSO',
                '> Sistema listo para operaciones...',
                '> _'
            ];

            let i = 0;
            function typeWriter() {
                if (i < lines.length) {
                    const line = document.createElement('div');
                    line.className = 'terminal-line';
                    line.innerHTML = lines[i];
                    line.style.animationDelay = (i * 0.1) + 's';
                    terminalContent.appendChild(line);
                    i++;
                    setTimeout(typeWriter, 300);
                } else {
                    // Añadir cursor parpadeante al final
                    const cursor = document.createElement('span');
                    cursor.className = 'cursor';
                    terminalContent.appendChild(cursor);
                }
            }
            
            typeWriter();
        }

        // Crear lluvia binaria de fondo
        function createBinaryRain() {
            const body = document.body;
            
            setInterval(() => {
                const binary = document.createElement('div');
                binary.className = 'binary-rain';
                binary.style.left = Math.random() * window.innerWidth + 'px';
                binary.innerHTML = Math.random() > 0.5 ? '1' : '0';
                body.appendChild(binary);
                
                setTimeout(() => {
                    body.removeChild(binary);
                }, 10000);
            }, 200);
        }

        createBinaryRain();

        // Efecto de typing para inputs
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function() {
                this.style.textShadow = '0 0 10px #00ff41';
            });
            
            input.addEventListener('blur', function() {
                this.style.textShadow = 'none';
            });
        });

        console.log(`
        ╔══════════════════════════════════════════════════════════════╗
        ║                    NEXUS SECURITY SYSTEM                     ║
        ║                         v2.1.5                               ║
        ║══════════════════════════════════════════════════════════════║
        ║  Sistema de autenticación avanzado cargado exitosamente     ║
        ║  Datos de usuario almacenados en localStorage               ║
        ║  JSON persistente: ACTIVO                                    ║
        ║  Efectos visuales: ACTIVOS                                   ║
        ║  Estado del sistema: OPERACIONAL                             ║
        ╚══════════════════════════════════════════════════════════════╝
        `);

        // Función para mostrar usuarios registrados (para debugging)
        function showRegisteredUsers() {
            console.log('=== USUARIOS REGISTRADOS EN NEXUS ===');
            console.log('JSON completo:', JSON.stringify(users, null, 2));
            Object.keys(users).forEach(username => {
                console.log(`Usuario: ${username}`);
                console.log(`Email: ${users[username].email}`);
                console.log(`Registrado: ${users[username].registered}`);
                console.log('---');
            });
        }

        // Añadir función al objeto window para que sea accesible desde consola
        window.showUsers = showRegisteredUsers;
        window.clearUsers = function() {
            localStorage.removeItem('nexus_users');
            users = {};
            console.log('Todos los usuarios han sido eliminados');
        };