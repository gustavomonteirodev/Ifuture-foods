
import { CartContext } from "../../Contexts/CartContext";

export const TestandoContext = () => {

    const cardRestaurante = [
        {
            "id": "0ydYFzfx2J9mbtGIGxvC",
            "price": 62.5,
            "category": "Refeição",
            "name": "Super wings",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/60364d55-35ad-4231-957c-fd950cb6e7b5/201808311145_super.png",
            "description": "Para os amantes de frango"
        },
        {
            "id": "F6YBAtfn7mbDg1f5G6tc",
            "category": "Bebida",
            "name": "Refrigerante",
            "description": "Coca cola, Sprite ou Guaraná",
            "price": 6.9,
            "photoUrl": "https://static-images.ifood.com.br/image/upload/t_medium/pratos/f62f7746-4888-4e81-a9b0-93bf5453c51a/202103180149_woHq_s.jpg"
        },
        {
            "id": "FWdrnAS9WWxfibk4DNsm",
            "category": "Refeição",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071032_49758008.jpg",
            "price": 54.5,
            "name": "Chook'n dillas",
            "description": "Corazón mexicano"
        },
        {
            "id": "bkdQhhADMDNfZpOyply8",
            "name": "Jackaroo ribs & steak",
            "category": "Refeição",
            "price": 82.9,
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/5221af98-5ad4-42e2-a767-23d1545b82d5/201911191742_Cuuv_j.jpg",
            "description": "Exclusividade Outbackkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
        },
        {
            "id": "dByezKpFCqeROQ1yqssf",
            "description": "Litoral na sua casa!",
            "category": "Refeição",
            "price": 61.5,
            "name": "Grilled fish & shrimp scampi",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071113_49758158.jpg"
        },
        {
            "id": "mCfoLMRVesyzYwTyScJz",
            "description": "Especialidade da casa",
            "category": "Refeição",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/5221af98-5ad4-42e2-a767-23d1545b82d5/201911191742_qCKt_r.jpg",
            "name": "Ribs on the barbie",
            "price": 65.4
        },
        {
            "id": "mkqtHeQPACWJ0hGU2wx1",
            "name": "Aussie grilled picanha",
            "price": 75.9,
            "description": "A Austrália mais perto de você",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071126_49758083.jpg",
            "category": "Refeição"
        },
        {
            "id": "toQmmkDkRpjvJHteQGB9",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071128_49758098.jpg",
            "name": "New york strip steak",
            "price": 70.9,
            "category": "Refeição",
            "description": "Sabor cosmopolita"
        },
        {
            "id": "tpQUUuH1gBEyhCVcY061",
            "category": "Refeição",
            "description": "Para estômagos menores",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071118_49758024.jpg",
            "name": "Junior ribs",
            "price": 54.9
        },
        {
            "id": "wGaTGAr74M9awBaonkLv",
            "category": "Refeição",
            "name": "Firecracker shrimp nachos",
            "price": 58.5,
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/aadcbd26-8afa-453b-ba51-fb95b2f67a81/201809071031_49758002.jpg",
            "description": "Frutos do mar? Temos também"
        }
    ]

    return (

        <CartContext.Provider value={cardRestaurante}>
        </CartContext.Provider>
    )


}
