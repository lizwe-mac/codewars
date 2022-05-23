function humanReadable (seconds) {
    let hr,min,sec
    let str_hr, str_min, str_sec
    hr = Math.floor(seconds/3600)
    min = Math.floor((seconds%3600)/60)
    sec = (seconds%3600)%60
    String(hr).length<2 ? str_hr='0'+String(hr) : str_hr=String(hr)
    String(min).length<2 ? str_min='0'+String(min) : str_min=String(min)
    String(sec).length<2 ? str_sec='0'+String(sec) : str_sec=String(sec)
    return `${str_hr}:${str_min}:${str_sec}`;
  }
