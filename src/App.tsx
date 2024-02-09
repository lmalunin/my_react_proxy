import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';

//import './App.css';

function App() {
  
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaYnVWS2FVTENtb2FwTDJLSTBQNDUxMjZLWjF4Q2l0TGlhRmtrUXhqMU5BIn0.eyJleHAiOjE3MDc0OTMwMTMsImlhdCI6MTcwNzQ5MjcxMywiYXV0aF90aW1lIjoxNzA3NDkyNzEzLCJqdGkiOiJkMTg0MzE2ZS02MTY5LTRlYzYtOTQxNi1lZTg1ZGFhNjFlNWUiLCJpc3MiOiJodHRwczovL3NzbzIuYmV0YS5tb2V4LmNvbS9hdXRoL3JlYWxtcy9TU08iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjo2ZDMwYmZiYy01NGE4LTRhMjEtYWRjZS1jYTYwNGQxOWYxZjE6OTM1NzQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhbGdvcGFjayIsInNlc3Npb25fc3RhdGUiOiI2ODEyMzExNC0xYWQ0LTQ2YjgtYjYyNS0wMDg2MjAxYzg4MDUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vbG9jYWxob3N0OjMwMDAiLCJodHRwczovL2RhdGFzaG9wLm1vZXgucGNjLmlubm9jb25zdWx0aW5nLnJ1IiwiaHR0cHM6Ly90ZXN0MDEuZGF0YXNob3AubW9leC5wY2MuaW5ub2NvbnN1bHRpbmcucnUiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI2ODEyMzExNC0xYWQ0LTQ2YjgtYjYyNS0wMDg2MjAxYzg4MDUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiOTM1NzQiLCJlbWFpbCI6ImFua3V6bmV0c292QGVnYXJ0ZWNoLnJ1In0.KnanbrZNPQjUgNej4bqUyeVa3IzhhpZXzh-CNCUifkgrwqOZjQ_HqNRX878FsfmVjgKQWVE8c0AZmTQ9ubdfpWapd9ZzXZf8YxOp9imsraBdIZ4miQuTqTqqdBt20dh1gtQCN_qZYLD9lusX-s-QCBJ0mXAEA0FjhKuopwHz7tdIHhE1xg6QU8VN4Y5MLVRpcIqY8r6H6o83GZbgSND_DyXSJrITKtBWOtbPcP1HTSB2aMATGpQhfbZ_xcrMqogmne4rCNcBPCYOCkPJfu93JUhFJhd9Y34erb_DXMpypK-1bQ6YBssWOZM5wCaDCGPEYHGpv7IsiYO7u6NEMsV9aw'
  
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
            axios.post('/api2/api/subscription/v1/', { 'productGuid': 'e58ed763-928c-4155-bee9-fdbaaadc15f3' })
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
