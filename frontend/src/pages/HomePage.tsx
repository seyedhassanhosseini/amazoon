import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from './../data'
import { Product } from '../types/Product'
import { ApiError } from '../types/ApiError'
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import { getError } from '../utils'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'






export default function HomePage() {

  const {data: products, isLoading, error} = useGetProductsQuery()
  return isLoading ? (
  <LoadingBox>

  </LoadingBox>) : error ? (<MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>) :  
  (
    <Row>
      <Helmet>
        <title> TS Amazona</title>
      </Helmet>
      {products!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product}/>
        </Col>
      ))}
    </Row>
  
  )
}