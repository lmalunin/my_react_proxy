import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';

//import './App.css';

function App() {
  
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaYnVWS2FVTENtb2FwTDJLSTBQNDUxMjZLWjF4Q2l0TGlhRmtrUXhqMU5BIn0.eyJleHAiOjE3MDc0OTY2NjMsImlhdCI6MTcwNzQ5NjM2MywiYXV0aF90aW1lIjoxNzA3NDk2MzYzLCJqdGkiOiI2YjQzZDA4Ni1kZGMyLTQ3ZTktOGI5Ni0zZmFhMzllYjI5MzEiLCJpc3MiOiJodHRwczovL3NzbzIuYmV0YS5tb2V4LmNvbS9hdXRoL3JlYWxtcy9TU08iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjo2ZDMwYmZiYy01NGE4LTRhMjEtYWRjZS1jYTYwNGQxOWYxZjE6OTM1NzQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhbGdvcGFjayIsInNlc3Npb25fc3RhdGUiOiJmODk1ZmVkZi05OWMwLTQ1MzgtYWM3Yy01Nzg1NWJmYmY0NjkiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vbG9jYWxob3N0OjMwMDAiLCJodHRwczovL2RhdGFzaG9wLm1vZXgucGNjLmlubm9jb25zdWx0aW5nLnJ1IiwiaHR0cHM6Ly90ZXN0MDEuZGF0YXNob3AubW9leC5wY2MuaW5ub2NvbnN1bHRpbmcucnUiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJmODk1ZmVkZi05OWMwLTQ1MzgtYWM3Yy01Nzg1NWJmYmY0NjkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiOTM1NzQiLCJlbWFpbCI6ImFua3V6bmV0c292QGVnYXJ0ZWNoLnJ1In0.h6F83YtopvUbmPtpSruCJqLV-a3030QFP8dJLL23ii3duhcQI66uzuYsX95yea7M9h3MBlLnq1I_Mqmzf7FJ33HB4OPVhmMSkE0KPzr4Hs-8r03ZFC1udjbKem9o6X-S84q2KoIZrVZPX6dOKACtMprPeFrSmX-tkQKYRgk3XiL-fcP2mj7sYp1WVJrrMOpkFjnOmgQt-_KyBoDquPwmQD1JHc1fhTZmv5-x9p1aVSU8gK9y-J5ACISbITtoxOxpMQ7Mga10CDIWkAeO3wsOCMbHGQ7LLk13jZTeWtzqG95ZsVH4lg--4ikMHpyleSW6huv3BSTEX1NH7i-93Iexag'
  
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
