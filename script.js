        // Coordenadas de las ciudades colombianas (Sin San Andrés)
        const cities = {
            "Leticia": { lat: -4.2031, lng: -69.9406 },
            "Medellín": { lat: 6.2518, lng: -75.5636 },
            "Arauca": { lat: 7.0847, lng: -70.7587 },
            "Barranquilla": { lat: 10.9685, lng: -74.7813 },
            "Cartagena": { lat: 10.3932, lng: -75.4832 },
            "Tunja": { lat: 5.5446, lng: -73.3575 },
            "Manizales": { lat: 5.0687, lng: -75.5173 },
            "Florencia": { lat: 1.6147, lng: -75.6067 },
            "Yopal": { lat: 5.3475, lng: -72.4005 },
            "Popayán": { lat: 2.4418, lng: -76.6061 },
            "Valledupar": { lat: 10.4631, lng: -73.2532 },
            "Quibdo": { lat: 5.6922, lng: -76.6581 },
            "Montería": { lat: 8.7575, lng: -75.8875 },
            "Bogotá": { lat: 4.7110, lng: -74.0721 },
            "Inírida": { lat: 3.8653, lng: -67.9239 },
            "San José del Guaviare": { lat: 2.5746, lng: -72.6450 },
            "Neiva": { lat: 2.9273, lng: -75.2819 },
            "Riohacha": { lat: 11.5444, lng: -72.9072 },
            "Santa Marta": { lat: 11.2404, lng: -74.2031 },
            "Villavicencio": { lat: 4.1318, lng: -73.6275 },
            "Pasto": { lat: 1.2144, lng: -77.2784 },
            "San José de Cúcuta": { lat: 7.8939, lng: -72.5078 },
            "Mocoa": { lat: 1.1489, lng: -76.6476 },
            "Armenia": { lat: 4.5389, lng: -75.6725 },
            "Pereira": { lat: 4.8133, lng: -75.6961 },
            "Bucaramanga": { lat: 7.1254, lng: -73.1198 },
            "Sincelejo": { lat: 9.3047, lng: -75.3977 },
            "Ibagué": { lat: 4.4389, lng: -75.2322 },
            "Cali": { lat: 3.4516, lng: -76.5320 },
            "Mitú": { lat: 1.1983, lng: -70.1733 },
            "Puerto Carreño": { lat: 6.1852, lng: -67.4930 }
        };
        
        // Datos de distancias A* (Heurística + Coste Uniforme)
        const astarDistances = {
            "Leticia": {},
            "Medellín": { "Tunja": 678.91, "Manizales": 344.13, "Quibdo": 369.4, "Montería": 686.9 },
            "Arauca": { "Yopal": 632.62, "Bucaramanga": 724.1 },
            "Barranquilla": { "Cartagena": 225.22, "Valledupar": 469.48 },
            "Cartagena": { "Barranquilla": 225.22, "Bucaramanga": 1136.81, "Sincelejo": 311.35 },
            "Tunja": { "Medellín": 678.91, "Yopal": 327.55, "Bogotá": 269.73, "Bucaramanga": 464.86 },
            "Manizales": { "Medellín": 344.13, "Pereira": 86.02, "Ibagué": 263.07 },
            "Florencia": { "Neiva": 411.82, "Mocoa": 372.92 },
            "Yopal": { "Arauca": 632.62, "Tunja": 327.55, "Puerto Carreño": 1577.87 },
            "Popayán": { "Neiva": 426.47, "Pasto": 408.12, "Cali": 246.79 },
            "Valledupar": { "Barranquilla": 469.48, "Riohacha": 319.68, "Santa Marta": 389.98, "Bucaramanga": 837.51 },
            "Quibdo": { "Medellín": 369.4 },
            "Montería": { "Medellín": 686.9, "Sincelejo": 201.25 },
            "Bogotá": { "Tunja": 269.73, "Florencia": 464.39, "Villavicencio": 192.34, "Ibagué": 325.53 },
            "Inírida": { "Puerto Carreño": 262.78 },
            "San José del Guaviare": { "Villavicencio": 490.88 },
            "Neiva": { "Popayán": 426.47, "Ibagué": 375.99 },
            "Riohacha": { "Valledupar": 319.68 },
            "Santa Marta": { "Valledupar": 389.98 },
            "Villavicencio": { "Bogotá": 192.34, "San José del Guaviare": 490.88 },
            "Pasto": { "Popayán": 408.12, "Mocoa": 215.91 },
            "San José de Cúcuta": { "Bucaramanga": 597.04, "Mocoa": 213.94 },
            "Mocoa": { "Florencia": 254.16, "Pasto": 215.91 },
            "Armenia": { "Pereira": 84.87, "Ibagué": 128.6, "Cali": 340.28 },
            "Pereira": { "Manizales": 86.02, "Armenia": 84.87 },
            "Bucaramanga": { "Arauca": 724.1, "Cartagena": 1136.81, "Tunja": 464.86, "San José de Cúcuta": 213.94, "Sincelejo": 987.83 },
            "Sincelejo": { "Cartagena": 247.32, "Montería": 162.62, "Bucaramanga": 987.83 },
            "Ibagué": { "Manizales": 263.07, "Bogotá": 325.53, "Neiva": 375.99, "Armenia": 128.6 },
            "Cali": { "Popayán": 246.79, "Armenia": 306.56 },
            "Mitú": {},
            "Puerto Carreño": { "Yopal": 1577.87, "Inírida": 262.78 }
        };
        
        // Datos de distancias Algoritmo Voraz (Heurística)
        const greedyDistances = {
            "Leticia": {},
            "Medellín": { "Tunja": 255.61, "Manizales": 131.64, "Quibdo": 136.1, "Montería": 280.71 },
            "Arauca": { "Yopal": 265.46, "Bucaramanga": 260.52 },
            "Barranquilla": { "Cartagena": 98.98, "Valledupar": 176.16 },
            "Cartagena": { "Barranquilla": 98.98, "Bucaramanga": 448.82, "Sincelejo": 123.66 },
            "Tunja": { "Medellín": 255.61, "Yopal": 109.81, "Bogotá": 126.14, "Bucaramanga": 178.92 },
            "Manizales": { "Medellín": 131.64, "Pereira": 34.63, "Ibagué": 76.85 },
            "Florencia": { "Neiva": 144.61, "Mocoa": 127.08 },
            "Yopal": { "Arauca": 265.46, "Tunja": 109.81, "Puerto Carreño": 550.97 },
            "Popayán": { "Neiva": 157.55, "Pasto": 155.09, "Cali": 111.07 },
            "Valledupar": { "Barranquilla": 176.16, "Riohacha": 126.06, "Santa Marta": 135.68, "Bucaramanga": 298.52 },
            "Quibdo": { "Medellín": 136.1 },
            "Montería": { "Medellín": 280.71, "Sincelejo": 81.31 },
            "Bogotá": { "Tunja": 126.14, "Florencia": 165.46, "Villavicencio": 76.12, "Ibagué": 129.53 },
            "Inírida": { "Puerto Carreño": 262.78 },
            "San José del Guaviare": { "Villavicencio": 205.97 },
            "Neiva": { "Popayán": 157.55, "Ibagué": 168.17 },
            "Riohacha": { "Valledupar": 126.06 },
            "Santa Marta": { "Valledupar": 135.68 },
            "Villavicencio": { "Bogotá": 76.12, "San José del Guaviare": 205.97 },
            "Pasto": { "Popayán": 155.09, "Mocoa": 70.26 },
            "San José de Cúcuta": { "Bucaramanga": 298.52, "Mocoa": 106.97 },
            "Mocoa": { "Florencia": 127.08, "Pasto": 70.26 },
            "Armenia": { "Pereira": 31.12, "Ibagué": 50.87, "Cali": 153.28 },
            "Pereira": { "Manizales": 34.63, "Armenia": 31.12 },
            "Bucaramanga": { "Arauca": 260.52, "Cartagena": 448.82, "Tunja": 178.92, "San José de Cúcuta": 106.97, "Sincelejo": 348.66 },
            "Sincelejo": { "Cartagena": 123.66, "Montería": 81.31, "Bucaramanga": 348.66 },
            "Ibagué": { "Manizales": 76.85, "Bogotá": 129.53, "Neiva": 168.17, "Armenia": 50.87 },
            "Cali": { "Popayán": 111.07, "Armenia": 153.28 },
            "Mitú": {},
            "Puerto Carreño": { "Yopal": 550.97, "Inírida": 262.78 }
        };
        
        // Inicializar el mapa
        const map = L.map('map').setView([4.5709, -74.2973], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Añadir marcadores para cada ciudad
        const markers = {};
        for (const city in cities) {
            const marker = L.marker([cities[city].lat, cities[city].lng], {
                title: city
            }).addTo(map);
            marker.bindPopup(city);
            markers[city] = marker;
        }
        
        // Poblar los selectores de ciudades
        const originSelect = document.getElementById('origin');
        const destinationSelect = document.getElementById('destination');
        
        Object.keys(cities).sort().forEach(city => {
            const originOption = document.createElement('option');
            originOption.value = city;
            originOption.textContent = city;
            originSelect.appendChild(originOption);
            
            const destinationOption = document.createElement('option');
            destinationOption.value = city;
            destinationOption.textContent = city;
            destinationSelect.appendChild(destinationOption);
        });
        
        // Líneas para mostrar rutas
        let routeLayer = null;
        let connectionLayers = [];
        
        // Función para mostrar todas las conexiones
        function showConnections(distances) {
            // Limpiar conexiones anteriores
            connectionLayers.forEach(layer => map.removeLayer(layer));
            connectionLayers = [];
            
            for (const cityFrom in distances) {
                const neighbors = distances[cityFrom];
                for (const cityTo in neighbors) {
                    const fromCoord = [cities[cityFrom].lat, cities[cityFrom].lng];
                    const toCoord = [cities[cityTo].lat, cities[cityTo].lng];
                    
                    const line = L.polyline([fromCoord, toCoord], {
                        color: 'gray',
                        weight: 1.5,
                        opacity: 0.6,
                        dashArray: '5, 5'
                    }).addTo(map);
                    
                    line.bindTooltip(`${cityFrom} → ${cityTo}: ${distances[cityFrom][cityTo]} km`);
                    connectionLayers.push(line);
                }
            }
        }
        
        // Manejador para mostrar/ocultar conexiones
        document.getElementById('showConnections').addEventListener('change', function(e) {
            if (e.target.checked) {
                const algorithm = document.getElementById('algorithm').value;
                if (algorithm === 'astar') {
                    showConnections(astarDistances);
                } else {
                    showConnections(greedyDistances);
                }
            } else {
                connectionLayers.forEach(layer => map.removeLayer(layer));
                connectionLayers = [];
            }
        });
        
        // Implementación de algoritmo A* (mejorado)
        function findPathAStar(start, end, distances) {
            const visited = new Set();
            const queue = [{
                city: start,
                path: [start],
                cost: 0
            }];
            
            // Contador para limitar iteraciones (previene bucles infinitos)
            let iterations = 0;
            const maxIterations = 1000;
            
            while (queue.length > 0 && iterations < maxIterations) {
                iterations++;
                
                // Ordenar por coste
                queue.sort((a, b) => a.cost - b.cost);
                const current = queue.shift();
                
                if (current.city === end) {
                    return {
                        path: current.path,
                        cost: current.cost
                    };
                }
                
                if (visited.has(current.city)) continue;
                visited.add(current.city);
                
                // Explorar vecinos
                const neighbors = distances[current.city] || {};
                for (const neighbor in neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push({
                            city: neighbor,
                            path: [...current.path, neighbor],
                            cost: current.cost + neighbors[neighbor]
                        });
                    }
                }
            }
            
            return null; // No hay ruta
        }
        
        // Implementación del algoritmo voraz (mejorado)
        function findPathGreedy(start, end, distances) {
            const visited = new Set();
            let currentCity = start;
            const path = [start];
            let totalCost = 0;
            
            // Límite de saltos para evitar bucles
            const maxHops = 30;
            let hopCount = 0;
            
            // Función para calcular aproximadamente la distancia euclidiana entre dos ciudades
            function estimateDistance(city1, city2) {
                if (!cities[city1] || !cities[city2]) return Infinity;
                
                const lat1 = cities[city1].lat;
                const lng1 = cities[city1].lng;
                const lat2 = cities[city2].lat;
                const lng2 = cities[city2].lng;
                
                // Distancia euclidiana aproximada (simplificada para este caso)
                return Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(lng1 - lng2, 2)) * 111; // 111 km por grado aprox.
            }
            
            while (currentCity !== end && hopCount < maxHops) {
                hopCount++;
                visited.add(currentCity);
                const neighbors = distances[currentCity] || {};
                
                // Obtener el vecino más prometedor considerando también la distancia al destino
                let bestNeighbor = null;
                let bestScore = Infinity;
                
                for (const neighbor in neighbors) {
                    if (!visited.has(neighbor)) {
                        // Combinar el costo conocido con una estimación de la distancia al destino
                        const distanceToNeighbor = neighbors[neighbor];
                        const estimatedDistanceToEnd = estimateDistance(neighbor, end);
                        
                        // Puntuación combinada (similar a A* pero con más peso en la heurística)
                        const score = distanceToNeighbor + (estimatedDistanceToEnd * 2); // Damos más peso a la heurística
                        
                        if (score < bestScore) {
                            bestNeighbor = neighbor;
                            bestScore = score;
                        }
                    }
                }
                
                if (!bestNeighbor) {
                    // Intentar retroceder si es posible (backtracking simple)
                    if (path.length > 1) {
                        // Retrocedemos al punto anterior y marcamos este como visitado
                        const lastCity = path.pop();
                        visited.add(lastCity);
                        currentCity = path[path.length - 1];
                        continue;
                    }
                    
                    // No hay camino posible
                    return null;
                }
                
                path.push(bestNeighbor);
                totalCost += neighbors[bestNeighbor];
                currentCity = bestNeighbor;
                
                if (currentCity === end) {
                    return {
                        path: path,
                        cost: totalCost
                    };
                }
            }
            
            if (hopCount >= maxHops) {
                return null; // Demasiados saltos
            }
            
            return null; // No se encontró ruta
        }
        
        // Verificar si una ruta es posible
        function canReach(start, end, distances) {
            const queue = [start];
            const visited = new Set([start]);
            
            while (queue.length > 0) {
                const current = queue.shift();
                
                if (current === end) {
                    return true;
                }
                
                const neighbors = distances[current] || {};
                for (const neighbor in neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
            
            return false;
        }
        
        // Calcular y mostrar la ruta
        document.getElementById('calculate').addEventListener('click', function() {
            const origin = originSelect.value;
            const destination = destinationSelect.value;
            const algorithm = document.getElementById('algorithm').value;
            
            if (origin === destination) {
                document.getElementById('result').innerHTML = '<p>El origen y destino deben ser diferentes.</p>';
                return;
            }
            
            // Limpiar ruta anterior
            if (routeLayer) {
                map.removeLayer(routeLayer);
            }
            
            // Seleccionar datos según algoritmo
            const distanceData = algorithm === 'astar' ? astarDistances : greedyDistances;
            
            // Verificar si existe un camino posible
            const isReachable = canReach(origin, destination, distanceData);
            
            if (!isReachable) {
                document.getElementById('result').innerHTML = `
                    <p>No existe una ruta posible entre ${origin} y ${destination} con el algoritmo seleccionado.</p>
                    <div class="warning-message">
                        <strong>¿Por qué ocurre esto?</strong><br>
                        Según los datos proporcionados, algunas ciudades no están conectadas en la red de rutas.
                        Puedes probar con otro algoritmo o con ciudades diferentes.
                    </div>
                `;
                return;
            }
            
            // Seleccionar algoritmo y calcular ruta
            let result;
            if (algorithm === 'astar') {
                result = findPathAStar(origin, destination, distanceData);
            } else {
                result = findPathGreedy(origin, destination, distanceData);
            }
            
            if (!result) {
                document.getElementById('result').innerHTML = `
                    <p>No se pudo calcular una ruta entre ${origin} y ${destination}.</p>
                    <div class="warning-message">
                        <p>Causas posibles:</p>
                        <ul>
                            <li>Las ciudades están en componentes desconectados del grafo</li>
                            <li>El algoritmo no pudo encontrar un camino óptimo</li>
                        </ul>
                    </div>
                `;
                return;
            }
            
            // Mostrar resultado
            let resultHTML = `<h3>Ruta de ${origin} a ${destination}</h3>`;
            
            let algorithmName;
            if (algorithm === 'astar') {
                algorithmName = 'Heurística + Coste Uniforme (A*)';
            } else {
                algorithmName = 'Heurística (Algoritmo Voraz)';
            }
            
            resultHTML += `<p>Algoritmo: ${algorithmName}</p>`;
            resultHTML += `<p>Distancia total: ${result.cost.toFixed(2)} km</p>`;
            
            resultHTML += '<div class="path-info">';
            resultHTML += '<p><strong>Ciudades en la ruta:</strong></p>';
            resultHTML += '<ol>';
            result.path.forEach(city => {
                resultHTML += `<li>${city}</li>`;
            });
            resultHTML += '</ol></div>';
            
            document.getElementById('result').innerHTML = resultHTML;
            
            // Dibujar la ruta en el mapa
            const routePoints = result.path.map(city => [cities[city].lat, cities[city].lng]);
            const routeColor = algorithm === 'astar' ? 'blue' : 'green';
            
            routeLayer = L.polyline(routePoints, {
                color: routeColor,
                weight: 4,
                opacity: 0.7
            }).addTo(map);
            
            // Ajustar el mapa para mostrar toda la ruta
            map.fitBounds(routeLayer.getBounds(), { padding: [50, 50] });
            
            // Resaltar las ciudades en la ruta
            result.path.forEach(city => {
                markers[city].openPopup();
            });
        });
        
        // Actualizar conexiones cuando cambia el algoritmo
        document.getElementById('algorithm').addEventListener('change', function() {
            const showConnectionsChecked = document.getElementById('showConnections').checked;
            if (showConnectionsChecked) {
                const algorithm = this.value;
                if (algorithm === 'astar') {
                    showConnections(astarDistances);
                } else {
                    showConnections(greedyDistances);
                }
            }
                });