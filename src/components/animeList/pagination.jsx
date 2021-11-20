import ReactPaginate from 'react-paginate'

export default function Pagination ({ totalPages }) {
  return (
    <ReactPaginate 
      nextLabel='Next'
      previousLabel='Previous'
      breakLabel='...'
      pageCount={ totalPages }
      containerClassName='container-pagination'
      pageClassName='page-pagination'
      nextClassName='page-pagination'
      previousClassName='page-pagination'
      activeClassName='active-pagination'
      disabledClassName='disable-pagination'
      breakClassName='page-pagination'
      pageRangeDisplayed={2}
    />
  )
}