import API from './api'


export const getStudentByRoll = (rollNo)=>{
  return API.get(`/student/${rollNo}`)
}


export const addStudent = (data)=>{
    return API.post(`/api/users`, data)

}


export const getAllStudent = ()=>{
    return API.get(`/ViewAllStudents`)

}


export const updateStudent = (id, data) => {
  return API.put(`/student/${id}`, data)
  
}