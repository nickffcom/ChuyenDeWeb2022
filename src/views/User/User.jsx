import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import "./User.scss";
import { Modal } from "antd";
import { del, get, patch } from "../../utils/api";

export const defaultValue = {
  id: -1,
  username: "",
  name: "",
  email: "",
  gender: "",
  address: "",
  phone: "",
  amountOrder: 0,
  amountSpent: 0.
}

function User() {

  const [columm, setColumm] = useState(["id", "E-mail", "Tên", "Địa chỉ", "Giới tính", "Số đơn hàng", "Số tiền", "Quản lý"]);
  const [rawData, setRawData] = useState();
  const [userList, setUserList] = useState([]);
  const [isReload, setIsReload] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    const initData = async () => {
      const response = await get(`/admin/user/user-list?page=${page}&limit=${limit}`);
      console.log("response", response);
      if (response.status === 200) {
        setRawData(response.data)
        setUserList(response.data.data.userDTOList);
      }
    }
    
    initData();
  }, [isReload])

  console.log("rawData:", rawData && Array(rawData.data.totalPage).fill(0).forEach((x, page) => page));

  const [popup, setPopup] = useState({
    isOpen: false,
    data: undefined,
  });
  
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const handleEdit = (user) => {
    console.log(user);
    reset(user);
    setPopup({
      isOpen: !popup.isOpen,
      data: user,
    })
  }

  const handleDelete = async (user) => {
    //call api here
    const response = await del(`/admin/user/user-list?id=${user.id}`);
    if (response.status === 200) {
      setIsReload(!isReload);
    }
  }

  const handleActive = async (user) => {
    const response = await patch(`/admin/user/${user.id}`, {
      status: !user.status,
    });
    if (response.status === 200) {
      setIsReload(!isReload);
    }
  }

  const onSubmit = data => console.log(data);

  return (
    <main id="content" role="main" className="main homepage-main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center mb-3">
            <div className="col-sm mb-2 mb-sm-0">
              <h1 className="page-header-title">Khách hàng <span className="badge badge-soft-dark ml-2">97,524</span></h1>
              <div className="mt-2">
                {/* <a class="text-body mr-3" href="javascript:;" data-toggle="modal" data-target="#importCustomersModal">
                <i class="tio-publish mr-1"></i> Import customers
              </a>
              <a class="text-body mr-3" href="javascript:;" data-toggle="modal" data-target="#exportCustomersModal">
                <i class="tio-download-to mr-1"></i> Export
              </a> */}
                {/* Unfold */}
                {/* <div class="hs-unfold">
                <a class="js-hs-unfold-invoker text-body" href="javascript:;" data-hs-unfold-options='{
                       "target": "#moreOptionsDropdown",
                       "type": "css-animation"
                     }'>
                  More options <i class="tio-chevron-down"></i>
                </a>

                <div id="moreOptionsDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu mt-1">
                  <a class="dropdown-item" href="#">
                    <i class="tio-copy dropdown-item-icon"></i> Manage duplicates
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="tio-edit dropdown-item-icon"></i> Edit users
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="tio-restore dropdown-item-icon"></i> Restore clients
                  </a>
                </div>
              </div> */}
                {/* End Unfold */}
              </div>
            </div>
            {/* <div class="col-sm-auto">
            <a class="btn btn-primary" href="ecommerce-add-customers.html">Thêm khách hàng</a>
          </div> */}
          </div>
          {/* End Row */}
          {/* Nav Scroller */}
          <div className="js-nav-scroller hs-nav-scroller-horizontal">
            <span className="hs-nav-scroller-arrow-prev" style={{ display: 'none' }}>
              <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                <i className="tio-chevron-left" />
              </a>
            </span>
            <span className="hs-nav-scroller-arrow-next" style={{ display: 'none' }}>
              <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                <i className="tio-chevron-right" />
              </a>
            </span>
            {/* Nav */}
            <ul className="nav nav-tabs page-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">Tất cả khách hàng</a>
              </li>
              {/* <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Mới</a>
            </li> */}
              {/* <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Returning</a>
            </li> */}
              {/* <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Abandoned checkouts</a>
            </li> */}
              {/* <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Email subscribers</a>
            </li> */}
            </ul>
            {/* End Nav */}
          </div>
          {/* End Nav Scroller */}
        </div>
        {/* End Page Header */}
        {/* Card */}
        <div className="card">
          {/* Body */}
          <div className="card-body">
            <div className="row justify-content-between align-items-center flex-grow-1">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <form>
                  {/* Search */}
                  <div className="input-group input-group-merge input-group-flush">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="tio-search" />
                      </div>
                    </div>
                    <input id="datatableSearch" type="search" className="form-control" placeholder="Tìm khách hàng" aria-label="Search customer" />
                  </div>
                  {/* End Search */}
                </form>
              </div>
              <div className="col-lg-6">
                <div className="d-sm-flex justify-content-sm-end align-items-sm-center">
                  {/* Datatable Info */}
                  <div id="datatableCounterInfo" className="mr-2 mb-2 mb-sm-0" style={{ display: 'none' }}>
                    <div className="d-flex align-items-center">
                      <span className="font-size-sm mr-3">
                        Đã chọn
                        <span id="datatableCounter">0</span>
                        khách hàng
                      </span>
                      <a className="btn btn-sm btn-outline-danger" href="javascript:;">
                        <i className="tio-delete-outlined" /> Xóa
                      </a>
                    </div>
                  </div>
                  {/* End Datatable Info */}
                  {/* Export Products */}
                  <div className="hs-unfold mr-2">
                    <a className="js-hs-unfold-invoker btn btn-sm btn-white dropdown-toggle" href="javascript:;" data-hs-unfold-options="{
                        &quot;target&quot;: &quot;#usersExportDropdown&quot;,
                        &quot;type&quot;: &quot;css-animation&quot;
                      }">
                      <i className="tio-download-to mr-1" /> Export
                    </a>
                    <div id="usersExportDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-sm-right">
                      <span className="dropdown-header">Options</span>
                      <a id="export-copy" className="dropdown-item" href="javascript:;">
                        <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\copy.svg" alt="Image Description" />
                        Copy
                      </a>
                      <a id="export-print" className="dropdown-item" href="javascript:;">
                        <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\illustrations\print.svg" alt="Image Description" />
                        Print
                      </a>
                      <div className="dropdown-divider" />
                      <span className="dropdown-header">Download options</span>
                      <a id="export-excel" className="dropdown-item" href="javascript:;">
                        <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\excel.svg" alt="Image Description" />
                        Excel
                      </a>
                      <a id="export-csv" className="dropdown-item" href="javascript:;">
                        <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\components\placeholder-csv-format.svg" alt="Image Description" />
                        .CSV
                      </a>
                      <a id="export-pdf" className="dropdown-item" href="javascript:;">
                        <img className="avatar avatar-xss avatar-4by3 mr-2" src="assets\svg\brands\pdf.svg" alt="Image Description" />
                        PDF
                      </a>
                    </div>
                  </div>
                  {/* Export Products */}
                  {/* Unfold */}
                  <div className="hs-unfold">
                    <a className="js-hs-unfold-invoker btn btn-white" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#showHideDropdown&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;
                       }">
                      <i className="tio-table mr-1" /> Số cột <span className="badge badge-soft-dark rounded-circle ml-1">5</span>
                    </a>
                    <div id="showHideDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right dropdown-card" style={{ width: '15rem' }}>
                      <div className="card card-sm">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Tên</span>
                            {/* Checkbox Switch */}
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_name">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_name" defaultChecked />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">E-mail</span>
                            {/* Checkbox Switch */}
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_email">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_email" defaultChecked />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Số điện thoại</span>
                            {/* Checkbox Switch */}
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_phone">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_phone" />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Địa chỉ</span>
                            {/* Checkbox Switch */}
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_address">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_address" defaultChecked />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Trạng thái</span>
                            {/* Checkbox Switch */}
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_account_status">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_account_status" />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Số đơn hàng</span>
                            {/* Checkbox Switch */}
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_orders">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_orders" defaultChecked />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="mr-2">Số tiền đã chi</span>
                            {/* Checkbox Switch */}
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_total_spent">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_total_spent" defaultChecked />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="mr-2">Ngày tạo</span>
                            {/* Checkbox Switch */}
                            <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_date_created">
                              <input type="checkbox" className="toggle-switch-input" id="toggleColumn_date_created" />
                              <span className="toggle-switch-label">
                                <span className="toggle-switch-indicator" />
                              </span>
                            </label>
                            {/* End Checkbox Switch */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Unfold */}
                </div>
              </div>
            </div>
            {/* End Row */}
          </div>
          {/* End Body */}
          {/* Table */}
          <div className="table-responsive datatable-custom">
            <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                     &quot;columnDefs&quot;: [{
                        &quot;targets&quot;: [0],
                        &quot;orderable&quot;: false
                      }],
                     &quot;order&quot;: [],
                     &quot;info&quot;: {
                       &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                     },
                     &quot;search&quot;: &quot;#datatableSearch&quot;,
                     &quot;entries&quot;: &quot;#datatableEntries&quot;,
                     &quot;pageLength&quot;: 15,
                     &quot;isResponsive&quot;: false,
                     &quot;isShowPaging&quot;: false,
                     &quot;pagination&quot;: &quot;datatablePagination&quot;
                   }">
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="table-column-pr-0">
                    <div className="custom-control custom-checkbox">
                      <input id="datatableCheckAll" type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="datatableCheckAll" />
                    </div>
                  </th>
                  {columm.map((col, index) => <th className={index === 0 ? "table-column-pl-0" : ""} key={`col-${index}`}>{col}</th>)}
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) =>
                  <tr>
                    <td className="table-column-pr-0" key={`user-${index}`}>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="usersDataCheck1" />
                        <label className="custom-control-label" htmlFor="usersDataCheck1" />
                      </div>
                    </td>
                    {/* <td className="table-column-pl-0">
                      <div className="d-flex align-items-center">
                        <div className="ml-3">
                          <span className="h5 text-hover-primary">{user.id}</span>
                        </div>
                      </div>
                    </td> */}
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.name}</td>
                    <td>{user.address}</td>
                    <td>{user.gender}</td>
                    <td>{user.amountOrder}</td>
                    <td>{user.amountSpent}</td>
                    <td onClick={() => handleActive(user)} className="user-status">
                      <span className={classNames("legend-indicator", { "bg-success": user.status })} />{user.status ? "Active" : "Inactive"}
                    </td>

                    <div className="btn-group" role="group">
                      <a className="btn btn-sm btn-white" onClick={() => handleDelete(user)}>
                        <i className="tio-edit" /> Xóa
                      </a>
                    </div>
                    {/* <div className="btn-group" role="group">
                      <a className="btn btn-sm btn-white" onClick={() => handleEdit(user)}>
                        <i className="tio-edit" /> Sửa
                      </a>
                      <div className="hs-unfold btn-group">
                        <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                             &quot;target&quot;: &quot;#productsEditDropdown1&quot;,
                             &quot;type&quot;: &quot;css-animation&quot;,
                             &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                           }" />
                        <div id="productsEditDropdown1" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                          <a className="dropdown-item" onClick={() => handleDelete(user)}>
                            <i className="tio-delete-outlined dropdown-item-icon" /> Xóa
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </tr>
                )}

              </tbody>
            </table>
          </div>
          {/* End Table */}
          {/* Footer */}
          <div className="card-footer">
            {/* Pagination */}
            <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
              <div className="col-sm mb-2 mb-sm-0">
                <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                  <span className="mr-2">Hiển thị</span>
                  {/* Select */}
                  <select data-hs-select2-options="{
                            &quot;minimumResultsForSearch&quot;: &quot;Infinity&quot;,
                            &quot;customClass&quot;: &quot;custom-select custom-select-sm custom-select-borderless&quot;,
                            &quot;dropdownAutoWidth&quot;: true,
                            &quot;width&quot;: true
                          }" onChange={(e) => {
                            setLimit(e.target.value);
                            setIsReload(!isReload);
                          }}>
                    <option value={10} >10</option>
                    <option value={15} selected>15</option>
                    <option value={20}>20</option>
                  </select>
                  {/* End Select */}
                  <span className="text-secondary mr-2"> khách hàng trong tổng</span>
                  {/* Pagination Quantity */}
                  <span id="datatableWithPaginationInfoTotalQty" />
                  <div style={{ display: "flex", gap: "2px", cursor: "pointer", color: "blue" }}>
                    {rawData && Array(rawData.data.totalPage).fill(0).map((x, page) => 
                      <div onClick={() => {
                        setPage(page + 1);
                        setIsReload(!isReload);
                      }}>
                        {page + 1}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-sm-auto">
                <div className="d-flex justify-content-center justify-content-sm-end">
                  {/* Pagination */}
                  <nav id="datatablePagination" aria-label="Activity pagination" />
                </div>
              </div>
            </div>
            {/* End Pagination */}
          </div>
          {/* End Footer */}
        </div>
        {/* End Card */}
      </div>
      {/* End Content */}

      <Modal title="Basic Modal" visible={popup.isOpen} onOk={handleSubmit(onSubmit)} onCancel={() => { setPopup({isOpen: false, data: undefined}); reset()}}>
        {popup.isOpen && 
          <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div className="form__item-container">
              <label htmlFor="name">Name</label>
              <input defaultValue="test" {...register("name")} />
            </div>

            <div className="form__item-container">
              <label htmlFor="email">Email</label>
              <input defaultValue="test" {...register("email")} />
            </div>

            <div className="form__item-container">
              <label htmlFor="phone">SĐT</label>
              <input defaultValue="test" {...register("phoneNumber")} />
            </div>

            <div className="form__item-container">
              <label htmlFor="address">Địa chỉ</label>
              <input defaultValue="test" {...register("address")} />
            </div>
          </form>
        }
      </Modal>
    </main>
  )
}

export default User;