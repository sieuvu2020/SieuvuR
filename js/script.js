const planetData = {
    earth: {
        name: "Earth",
        description: `
            <p>Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.</p>
            <p>Earth's atmosphere consists mostly of nitrogen and oxygen. Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth orbits around the Sun in 365.25 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.25 times.</p>
            <p>Earth's axis of rotation is tilted with respect to its orbital plane, producing seasons on Earth. The gravitational interaction between Earth and the Moon causes ocean tides, stabilizes Earth's orientation on its axis, and gradually slows its rotation.</p>
        `
    },
    mars: {
        name: "Mars",
        description: `
            <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".</p>
            <p>Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth. The days and seasons are comparable to those of Earth, because the rotational period as well as the tilt of the rotational axis relative to the ecliptic plane are similar.</p>
            <p>Mars is currently host to eight artificial satellites orbiting it. They are used primarily for communication and reconnaissance, but some are also used for navigation and weather monitoring. The first spacecraft to visit Mars was Mariner 4 in 1965.</p>
        `
    },
    neptune: {
        name: "Neptune",
        description: `
            <p>Neptune is the eighth and farthest known planet from the Sun in the Solar System. It is the fourth-largest planet by diameter and the third-largest by mass. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, with 1.0243 times the mass of Uranus.</p>
            <p>Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. It is primarily composed of hydrogen, helium, and traces of hydrocarbons and possibly nitrogen, along with water, ammonia, and methane. The planet's atmosphere has a dynamic weather system with the fastest winds in the Solar System.</p>
            <p>Neptune has a faint ring system and 14 known moons, with Triton being the largest. Triton is geologically active, with geysers believed to erupt nitrogen gas. Neptune was discovered on September 23, 1846, based on predictions by Urbain Le Verrier and John Couch Adams.</p>
        `
    }
}

function displayPlanetInfo(planet) {
    const planetInfoDiv = document.getElementById("planet-info");
    planetInfoDiv.innerHTML = `
        <h1>${planetData[planet].name}</h1>
        ${planetData[planet].description}
    `;
    planetInfoDiv.style.backgroundImage = `url('images/${planet}-surface.jpg')`;
    planetInfoDiv.style.backgroundSize = "cover";
    planetInfoDiv.style.backgroundPosition = "center";
    planetInfoDiv.style.backgroundRepeat = "no-repeat";
}

var images = document.querySelectorAll(".grid-content img");
for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "-1");
}