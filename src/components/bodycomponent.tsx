import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux'
import { getUserList } from '../redux/actions-creators/userListActions'
import { User } from '../redux/models/user'


const BodyPage=()=>{
    const[expense,setExpense]=useState<User[]>([])
    const{users}=useSelector((state:RootState)=>state.user)
    const dispatch=useDispatch()
    const userList=()=>dispatch<any>(getUserList())
    const[show,setShow]=useState(false)

    useEffect(()=>{
        userList()
        setExpense(users)
    },[users])

    const handle=()=>{
        if(show===true){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    return(
        <>
        <div className='border-0 pt-6'>
          {/* begin::Card toolbar */}
          <div className='w-50 float-end'>
            <div
              style={{marginTop: '-80px'}}
              className='d-flex justify-content-end align-items-center'
            >
              <div className='fw-bold me-5'>
                <span className='me-2'></span> Selected
              </div>

              {/* <ConfirmAlertWidget
          actionCancelText='Cancel'
          actionConfirm={async () => await deleteSelectedItems.mutateAsync()}
          actionConfirmText='Delete'
          alertMessage='Bu kullanıcıları silmek istediğinize emin misiniz?'
          alertTitle='Uyarı'
          show={show}
          setShow={setShow}
        /> */}
            </div>
          </div>
        </div>
      ) : (
        <div className='border-0 pt-6'>
          {/* begin::Card toolbar */}
          <div className='w-50 float-end'>
            <div
              style={{marginTop: '-80px'}}
              className='d-flex justify-content-end'
              data-kt-user-table-toolbar='base'
            >
              <button
                type='button'
                className='btn btn-primary'
              >
                Add Admin User
              </button>
            </div>
          </div>
        </div>
      )
      <div className={`card `}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Members Statistics</span>
            <span className='text-muted mt-1 fw-semobold fs-7'>Over 500 members</span>
          </h3>
          <div
            className='card-toolbar'
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            data-bs-trigger='hover'
            title='Click to add a user'
          ></div>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='w-25px'>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                       onChange={handle}
                        className='form-check-input'
                        type='checkbox'
                        value='1'
                        data-kt-check='true'
                        data-kt-check-target='.widget-9-check'
                      />
                    </div>
                  </th>
                  <th className='min-w-150px'>Name</th>
                  <th className='min-w-140px'>Group</th>
                  <th className='min-w-120px'>ID</th>
                  <th className='min-w-120px'>Added By</th>
                  <th className='min-w-120px'>Joined Date</th>
                  <th className='min-w-100px text-end'>Status</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {expense.map((item) => (
                  <tr>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input widget-9-check'
                          type='checkbox'
                          value='1'

                          // data-kt-check={isSelected}
                          // data-kt-check-target='#kt_table_users .form-check-input'
                          // checked={isSelected}
                        />
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='symbol symbol-45px me-5'>
                          {/* <img src={toAbsoluteUrl('/media/avatars/300-14.jpg')} alt='' /> */}
                        </div>
                        <div className='d-flex justify-content-start flex-column'>
                          <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                            {`${item.firstName}  ${item.lastName}`}
                          </a>
                          <span className='text-muted fw-semobold text-muted d-block fs-7'>
                            {item.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block fs-6'>
                        {item.maidenName}
                      </a>
                      <span className='text-muted fw-semobold text-muted d-block fs-7'>
                        {item.phone}
                      </span>
                    </td>
                    <td className='text-end'>
                      <div className='d-flex flex-column w-100 me-2'>
                        <div className='d-flex flex-stack mb-2'>
                          <a className='text-dark me-2 fs-7 fw-semobold'>{item.id}</a>
                        </div>
                        {/* <div className='progress h-6px w-100'>
                        <div
                          className='progress-bar bg-primary'
                          role='progressbar'
                          style={{width: '50%'}}
                        ></div>
                      </div> */}
                      </div>
                    </td>
                    <td className='text-end'>
                      <div className='d-flex flex-column w-100 me-2'>
                        <div className='d-flex flex-stack mb-2'>
                          <a className='text-dark me-2 fs-7 fw-semobold'>
                            `{item.maidenName} {item.age}`
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className='text-end'>
                      <div className='d-flex flex-column w-100 me-2'>
                        <div className='d-flex flex-stack mb-2'>
                          <a className='text-dark me-2 fs-7 fw-semobold'>
                            {JSON.stringify(item.gender)}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex justify-content-end flex-shrink-0'>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                        </a>
                        <a
                          href='#'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                        >
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input widget-9-check'
                        type='checkbox'
                        value='1'
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* begin::Row */}

      {/* <div className='row gy-5 g-xl-12'>
      <VersionModal />
      <div className='col-xl-7'>
        <GameDashboardWidget
          className=' mb-xl-8'
          chartColor='primary'
          chartHeight='200px'
          strokeColor='#ffffff'
        />
      </div>
      <div className='col-xl-5 mt-xl-9'>
        <PopularGamesWidget className='mb-xl-8' />
      </div>
    </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      {/* <NewGamesWidget className='' /> */}

      {/* end::Row */}
        </>
    )
}
  export default BodyPage
  