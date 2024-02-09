import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';

//import './App.css';

function App() {
  
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaYnVWS2FVTENtb2FwTDJLSTBQNDUxMjZLWjF4Q2l0TGlhRmtrUXhqMU5BIn0.eyJleHAiOjE3MDc0OTU5NTcsImlhdCI6MTcwNzQ5NTY1NywiYXV0aF90aW1lIjoxNzA3NDk1NjU2LCJqdGkiOiI5YzQ5YjViZS01ZDJiLTRlMDUtYmIwOC01ZGRkZTQ5YjI0MTIiLCJpc3MiOiJodHRwczovL3NzbzIuYmV0YS5tb2V4LmNvbS9hdXRoL3JlYWxtcy9TU08iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjo2ZDMwYmZiYy01NGE4LTRhMjEtYWRjZS1jYTYwNGQxOWYxZjE6OTM1NzQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhbGdvcGFjayIsInNlc3Npb25fc3RhdGUiOiJmODk1ZmVkZi05OWMwLTQ1MzgtYWM3Yy01Nzg1NWJmYmY0NjkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vbG9jYWxob3N0OjMwMDAiLCJodHRwczovL2RhdGFzaG9wLm1vZXgucGNjLmlubm9jb25zdWx0aW5nLnJ1IiwiaHR0cHM6Ly90ZXN0MDEuZGF0YXNob3AubW9leC5wY2MuaW5ub2NvbnN1bHRpbmcucnUiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJmODk1ZmVkZi05OWMwLTQ1MzgtYWM3Yy01Nzg1NWJmYmY0NjkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiOTM1NzQiLCJlbWFpbCI6ImFua3V6bmV0c292QGVnYXJ0ZWNoLnJ1In0.fFEHKZUt_B2ln-kpA-b9Ou5FDIpsZrIw8dt1golb3FjLH8XkdWsajFAQbztyKBGZx9-qMoWa756ID0QsFljdyuPenMNz24XG2UEOkMPn78o2uh1UeHjxOcDVsTNSA3LxmTtiCl5rY6p7YPWofXmiFr7U_6VxWgASPACjMpZxWslMgQwPZRWqYhb2bA5_84RT9hvNkqeaJetBousoJ39O0V_nR1XRb6tqy3Gb01Y0cZz9MUT6r5r-Fz7HZrFQuHQXeAdSnhXdQSyc0MMH06mmJnWn3EZ5wUJUI3KGcXcD-0ZYZGptYnqmBBk058BiVhnAl5JlfRZLUvFpxYVLpPMHgQ'
  
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
  const [data, setData] = useState('');
  
  return (
      <div className="App">
        <button onClick={() =>
            axios.get('/api1/api/userprofile/v1/')
                .then((res) => {
                  console.log(res)
                  setData(JSON.stringify(res.data))
                })
                .catch(err => {
                  console.log(err)
                })
        }>GET1
        </button>
        
        <button onClick={() =>
            axios.post('/api/subscription/v1', { 'productGuid': 'e58ed763-928c-4155-bee9-fdbaaadc15f3' })
                .then((res) => {
                  console.log(res)
                  setData(JSON.stringify(res.data))
                })
                .catch(err => {
                  console.log(err)
                })
        }>POST2
        </button>
        
        <br/>
        {data}
      </div>
  );
}

export default App;
