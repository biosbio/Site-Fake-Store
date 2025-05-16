// import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/lara-light-blue/theme.css';
// import 'primeflex/primeflex.css';
// import 'primereact/resources/primereact.min.css';

// import { useEffect, useState } from 'react';
// import { API } from '../services';
// import { Button } from 'primereact/button';

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showImageOnly, setShowImageOnly] = useState(false);

//   async function buscarProdutos() {
//     const request = await API.get('/products');
//     setProducts(request.data);
//   }

//   useEffect(() => {
//     buscarProdutos();
//   }, []);

//   return (
//     <>
//       <section className="overflow-hidden">
//         <h3>Lista de Produtos</h3>
//         <ul className="grid list-none p-0">
//           {products.map((product) => (
//             <li key={product.id} className="col-12 md:col-3 p-3">
//               <div
//                 className="shadow-4 p-3 border-round-md cursor-pointer"
//                 onClick={() => setSelectedProduct(product)}
//               >
//                 <div className="relative">
//                   <img
//                     className="w-full"
//                     style={{ height: '350px', objectFit: 'contain' }}
//                     src={product.image}
//                     alt=""
//                   />
//                   <h6
//                     className="absolute top-0 right-0 px-2 py-1 border-round-md"
//                     style={{
//                       backgroundColor: 'blueviolet',
//                       color: 'white',
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     {product.rating.rate}
//                   </h6>
//                 </div>
//                 <h3 className="mb-0 white-space-nowrap overflow-hidden text-overflow-ellipsis">
//                   {product.title}
//                 </h3>
//                 <h6 className="mt-0 uppercase" style={{ color: '#001aff' }}>
//                   {product.category}
//                 </h6>
//                 <p className="mt-0 white-space-nowrap overflow-hidden text-overflow-ellipsis">
//                   {product.description}
//                 </p>
//                 <h2>R$ {product.price}</h2>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Exibição dos detalhes do produto selecionado */}
//       {selectedProduct && !showImageOnly && (
//         <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-auto p-4" style={{ paddingBottom: '100px' }}>
//           {/* Botão Fechar */}
//           <Button
//             onClick={() => setSelectedProduct(null)}
//             className="absolute top-4 right-4 z-50"
//             icon="pi pi-times"
//             rounded
//             severity="danger"
//             style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.2rem' }}
//           />

//           <div className="max-w-screen-lg mx-auto mt-8">
//             {/* Imagem clicável para abrir em tela cheia */}
//             <img
//               src={selectedProduct.image}
//               alt=""
//               className="w-full mb-4 cursor-zoom-in"
//               style={{ maxHeight: '400px', objectFit: 'contain' }}
//               onClick={() => setShowImageOnly(true)} // Ativa visualização em tela cheia
//             />
//             <h1 className="text-2xl font-bold mb-2">{selectedProduct.title}</h1>
//             <h3 className="uppercase text-blue-700 mb-2">{selectedProduct.category}</h3>
//             <p className="text-lg mb-4">{selectedProduct.description}</p>
//             <h2 className="text-3xl font-bold">R$ {selectedProduct.price}</h2>
//           </div>
//         </div>
//       )}

//       {/* Visualização em tela cheia da imagem */}
//       {showImageOnly && selectedProduct && (
//         <div className="fixed top-0 left-0 w-full h-full z-50 bg-black  flex justify-content-center items-center" style={{ backgroundColor: 'rgba(5, 5, 5, 0.8)' }}>
//           <div className="relative">
//             {/* Botão Fechar na imagem em tela cheia */}
//             <Button
//               onClick={() => setShowImageOnly(false)}
//               icon="pi pi-times"
//               className="absolute top-2 right-2 z-50"
//               rounded
//               severity="danger"
//               style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.2rem' }}
//             />

//             {/* Imagem grande com destaque */}
//             <img
//               src={selectedProduct.image}
//               alt="Imagem do produto"
//               className="max-h-[90vh] object-contain"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';

import { useEffect, useState } from 'react';
import { API } from '../services';
import { Button } from 'primereact/button';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showImageOnly, setShowImageOnly] = useState(false);

  async function buscarProdutos() {
    const request = await API.get('/products');
    console.log(request.data);
    setProducts(request.data);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <section className="overflow-hidden">
        <h3>Lista de Produtos</h3>
        <ul className="grid list-none p-0">
          {products.map((product) => (
            <li key={product.id} className="col-12 md:col-3 p-3">
              <div
                className="shadow-4 p-3 border-round-md cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative">
                  <img
                    className="w-full"
                    style={{ height: '350px', objectFit: 'contain' }}
                    src={product.image}
                    alt=""
                  />
                  <h6
                    className="absolute top-0 right-0 px-2 py-1 border-round-md"
                    style={{
                      backgroundColor: 'blueviolet',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    {product.rating.rate}
                  </h6>
                </div>
                <h3 className="mb-0 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                  {product.title}
                </h3>
                <h6 className="mt-0 uppercase" style={{ color: '#001aff' }}>
                  {product.category}
                </h6>
                <p className="mt-0 white-space-nowrap overflow-hidden text-overflow-ellipsis">
                  {product.description}
                </p>
                <h2>R$ {product.price}</h2>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Exibição dos detalhes do produto selecionado */}
      {selectedProduct && !showImageOnly && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-auto p-4" style={{ paddingBottom: '100px' }}>
          {/* Botão Fechar */}
          <Button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-50"
            icon="pi pi-times"
            rounded
            severity="danger"
            style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.2rem' }}
          />

          <div className="max-w-screen-lg mx-auto mt-8">
            {/* Imagem clicável para abrir em tela cheia */}
            <img
              src={selectedProduct.image}
              alt=""
              className="w-full mb-4 cursor-zoom-in"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
              onClick={() => setShowImageOnly(true)} // Ativa visualização em tela cheia
            />
            <h1 className="text-2xl font-bold mb-2">{selectedProduct.title}</h1>
            <h3 className="uppercase text-blue-700 mb-2">{selectedProduct.category}</h3>
            <p className="text-lg mb-4">{selectedProduct.description}</p>
            <h2 className="text-3xl font-bold">R$ {selectedProduct.price}</h2>
          </div>
        </div>
      )}

      {/* Visualização em tela cheia da imagem */}
      {showImageOnly && selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black flex justify-center items-center" style={{ backgroundColor: 'rgba(5, 5, 5, 0.8)' }}>
          <div className="relative w-full h-full flex justify-center items-start">
            {/* Botão Fechar na imagem em tela cheia */}
            <Button
              onClick={() => setShowImageOnly(false)}
              icon="pi pi-times"
              className="absolute top-4 right-4 z-50"
              rounded
              severity="danger"
              style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.2rem' }}
            />

            {/* Imagem grande com destaque */}
            <img
              src={selectedProduct.image}
              alt="Imagem do produto"
              className="object-contain"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                maxHeight: '100%',
                maxWidth: '100%',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
