import Card from "../components/cards/Card";

const array =[
{
    id: 0,
    title: "samsung",
    price: 100,
},
{
    id: 1,
    title: "iphone",
    price: 150,
},
{
    id: 2,
    title: "nokia",
    price: 50,
},
{
    id: 3,
    title: "kia",
    price: 1000,
},
{
    id: 4,
    title: "hyundai",
    price: 5000,
},
]


const Main = () =>{

    return(
        <main>
            <Card/>
        </main>
    )
}

export default Main;