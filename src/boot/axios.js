import Vue from 'vue'
import axios from 'axios'

var axiosInstance = axios.create({
  baseURL: 'http://mtlbackendtest-env.eba-ipfru9eg.us-east-2.elasticbeanstalk.com/'
  /* other custom settings */
})

Vue.prototype.$axios = axiosInstance
