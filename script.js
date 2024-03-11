const api_key = '380803143406a5d3f28d282d0db290a3'
let lat
let lon

const apiKey = 'af09666b0a81b00d9e06651269b383a4'
const inp = document.getElementById('cityname')
const btn = document.querySelector('button')
const _date = document.querySelector('#_date')
const temp = document.querySelector('#temp')
const name_city = document.querySelector('#name_city')
const humidity = document.querySelector('#humidity')
const _days = document.querySelectorAll('.days')
const icons = document.querySelectorAll('.icons')
const temp_city = document.querySelectorAll('.temp_city')
const show_wther=document.querySelectorAll('.show_wther')

console.log(show_wther);


    
    async function checkWeather(city='London') {


      
        let myfetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        let res = await myfetch.json()
        lat = await res.coord.lat
        lon = await res.coord.lon

        let fetch2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
        let respons = await fetch2.json()
        let _data = respons

        temp.innerHTML = Math.round(_data.list[0].main.temp)
        name_city.innerHTML = _data.city.name
        humidity.innerHTML = _data.list[0].main.humidity + '%'
        show_wther[0].innerHTML=_data.list[0].weather[0].main
        show_wther[1].innerHTML=_data.list[8].weather[0].main
        show_wther[2].innerHTML=_data.list[16].weather[0].main
        show_wther[3].innerHTML=_data.list[24].weather[0].main
        show_wther[4].innerHTML=_data.list[32].weather[0].main
        _days[0].innerHTML = _data.list[8].dt_txt.slice(0, 10)
        _days[1].innerHTML = _data.list[16].dt_txt.slice(0, 10)
        _days[2].innerHTML = _data.list[24].dt_txt.slice(0, 10)
        _days[3].innerHTML = _data.list[32].dt_txt.slice(0, 10)


        let y = 8
        console.log(_data);

        function check_icons() {

            reset_icon()

            // **** add icon ****
            for (let x = 0; x < icons.length; x++) {
                if (
                    _data.list[y].weather[0].main == 'Clouds'
                ) {
                    icons[x].classList.add('icon-cloud')
                    temp_city[x].innerHTML = _data.list[y].main.temp

                } else if (
                    _data.list[y].weather[0].main == 'Clear'
                ) {
                    icons[x].classList.add('icon-sun')
                    temp_city[x].innerHTML = _data.list[y].main.temp

                } else if (
                    _data.list[y].weather[0].main == 'Rain'
                ) {
                    icons[x].classList.add('icon-rain-1')
                    temp_city[x].innerHTML = _data.list[y].main.temp



                } else if (
                    _data.list[y].weather[0].main == 'Snow'
                ) {
                    icons[x].classList.add('icon-snow-heavy')
                    temp_city[x].innerHTML = _data.list[y].main.temp


                }
                y += 8
            }

        }
        check_icons()
    }

    checkWeather()


    // ******** serch city ********

    btn.addEventListener('click', () => {
        if (inp.value == '') {
            alert("Please enter city name")
        } else {
            checkWeather(inp.value)
        }
    })

    // ******** end serch city ********



    // ***** reset Icons ****

    function reset_icon() {
        for (let i = 0; i < icons.length; i++) {
            icons[i].classList.remove('icon-cloud');
            icons[i].classList.remove('icon-sun');
            icons[i].classList.remove('icon-rain-1');
            icons[i].classList.remove('icon-snow-heavy');
            icons[1].classList.remove('icon-mist')
        }
    }
    // ***** end reset Icons ****






