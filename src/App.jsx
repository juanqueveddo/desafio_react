import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        desc="Los suplementos proteicos son productos nutricionales que en su estructura poseen una cantidad más grande de proteína. Hoy en día, a cualquier producto con 20 gr de proteína (por cada 100 gr de producto) se le denomina suplemento proteico."
        nombre1="Whey Protein ENA"
        img1="https://mercadodelsuplemento.com/wp-content/uploads/2018/10/truemade.png"
        nombre2="Whey Protein STAR NUTRITION"
        img2="http://d2r9epyceweg5n.cloudfront.net/stores/001/807/150/products/whey-pro-269e84ecb6a2331ecd16659385418526-640-0.png"
        nombre3="Whey Protein GOLD"
        img3="https://d3ugyf2ht6aenh.cloudfront.net/stores/306/768/products/iso51-fdc887ae934e2657b816662127140659-1024-1024.png" />
    </>
  )
}

export default App;
