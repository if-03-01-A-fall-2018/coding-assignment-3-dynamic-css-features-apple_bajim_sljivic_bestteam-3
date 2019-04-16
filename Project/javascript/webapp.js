var products=[
  [
    {
      model: 'Please choose a iPhone.'
    },
    {
      model: 'iPhone',
      dimensions: '115.00 x 61.00 x 11.60',
      ram: '128MB',
      internalStoage: '4GB',
      colors: 'Gray',
      display: '3.5"',
      camera: '2MP',
      frontCamera: 'No',
      releaseDate: 'June 2007'
    },
    {
      model: 'iPhone 3G',
      dimensions: '115.50 x 62.10 x 12.30',
      ram: '128MB',
      internalStoage: '8GB, 16GB',
      colors: 'Black, White',
      display: '3.5"',
      camera: '2MP',
      frontCamera: 'No',
      releaseDate: 'July 2008'
    },
    {
      model: 'iPhone 4',
      dimensions: '115.20 x 59.00 x 9.30',
      ram: '512MB',
      internalStoage: '8GB, 16GB, 32GB',
      colors: 'Black, White',
      display: '3.5"',
      camera: '5MP',
      frontCamera: '0.3MP',
      releaseDate: 'June 2010'
    },
    {
      model: 'iPhone 4s',
      dimensions: '115.20 x 58.66 x 9.30',
      ram: '1GB',
      internalStoage: '8GB, 16GB, 32GB, 64GB',
      colors: 'Black, White',
      display: '3.5"',
      camera: '8MP',
      frontCamera: '0.3MP',
      releaseDate: 'October 2011'
    },
    {
      model: 'iPhone 5',
      dimensions: '123.80 x 58.60 x 7.60',
      ram: '1GB',
      internalStoage: '16GB, 32GB, 64GB',
      colors: 'Black, White',
      display: '4"',
      camera: '8MP',
      frontCamera: '1.2MP',
      releaseDate: 'November 2012'
    },
    {
      model: 'iPhone 5c',
      dimensions: '124.40 x 59.20 x 8.97',
      ram: '1GB',
      internalStoage: '16GB, 32GB',
      colors: 'White, Pink, Yellow, Blue, Green',
      display: '4"',
      camera: '8MP',
      frontCamera: '1.2MP',
      releaseDate: 'September 2013'
    },
    {
      model: 'iPhone 5s',
      dimensions: '123.80 x 58.60 x 7.60',
      ram: '1GB',
      internalStoage: '16GB, 32GB, 64GB',
      colors: 'Gold, Silver, Space Gray',
      display: '4"',
      camera: '8MP',
      frontCamera: '1.2MP',
      releaseDate: 'September 2013'
    },
    {
      model: 'iPhone 6',
      dimensions: '123.80 x 58.60 x 7.60',
      ram: '1GB',
      internalStoage: '16GB, 32GB, 64GB',
      colors: 'Gold, Silver, Space Gray',
      display: '4.7"',
      camera: '8MP',
      frontCamera: '1.2MP',
      releaseDate: 'September 2014'
    },
    {
      model: 'iPhone 6s',
      dimensions: '138.30 x 67.10 x 7.10',
      ram: '2GB',
      internalStoage: '32GB, 128GB',
      colors: 'Silver, Gold, Space Grey, Rose Gold',
      display: '4.7"',
      camera: '12MP',
      frontCamera: '5MP',
      releaseDate: 'September 2015'
    },
    {
      model: 'iPhone SE',
      dimensions: '123.80 x 58.60 x 7.66',
      ram: '2GB',
      internalStoage: '32GB, 128GB',
      colors: 'Silver, Gold, Space Grey, Rose Gold',
      display: '4"',
      camera: '12MP',
      frontCamera: '1.2MP',
      releaseDate: 'March 2016'
    },
    {
      model: 'iPhone 7',
      dimensions: '138.30 x 67.10 x 7.10',
      ram: '2GB',
      internalStoage: '32GB, 128GB',
      colors: 'Rose Gold, Gold, Silver, Black',
      display: '4.7"',
      camera: '12MP',
      frontCamera: '7MP',
      releaseDate: 'September 2016'
    },
    {
      model: 'iPhone 8',
      dimensions: '138.40 x 67.30 x 7.30',
      ram: '2GB',
      internalStoage: '32GB, 128GB',
      colors: 'Silver, Space Gray, Gold',
      display: '4.7"',
      camera: '12MP',
      frontCamera: '7MP',
      releaseDate: 'September 2016'
    },
    {
      model: 'iPhone X',
      dimensions: '143.60 x 70.90 x 7.70',
      ram: '3GB',
      internalStoage: '64GB, 256GB',
      colors: 'Silver, Space Gray, Gold',
      display: '5.8"',
      camera: '12MP',
      frontCamera: '7MP',
      releaseDate: 'September 2017'
    },
    {
      model: 'iPhone XS',
      dimensions: '143.60 x 70.90 x 7.70',
      ram: '4GB',
      internalStoage: '64GB, 256GB, 512GB',
      colors: 'Silver, Space Gray, Gold',
      display: '5.8"',
      camera: '12MP',
      frontCamera: '7MP',
      releaseDate: 'September 2018'
    },
    {
      model: 'iPhone XR',
      dimensions: '150.90 x 75.70 x 8.30',
      ram: '3GB',
      internalStoage: '64GB, 256GB, 512GB',
      colors: 'Black, Blue, Coral, White, Yellow, Red',
      display: '6.1"',
      camera: '12MP',
      frontCamera: '7MP',
      releaseDate: 'September 2018'
    }
  ]
];
var deleted1=false;
var deleted2=false;

function hideSelect() {
  var selectedIndex=document.getElementById("Products").selectedIndex-1;
  if(selectedIndex!==-1)
  {
    document.getElementById("selectProduct").style.cssText='display: none !important';
    for(i = 0; i < products[selectedIndex].length; i++) {
      document.getElementById('model1').options[document.getElementById('model1').options.length] = new Option( products[selectedIndex][i].model, i);
    }
    for(i = 0; i < products[selectedIndex].length; i++) {
      document.getElementById('model2').options[document.getElementById('model2').options.length] = new Option( products[selectedIndex][i].model, i);
    }
    document.getElementById("iPhoneSelction").style.cssText = 'display:flex !important';
  }
}

function showFacts(select){
  var selectedIndex=document.getElementById("Products").selectedIndex-1;
  var selectedModel=document.getElementById('model'+select).selectedIndex+1;
  var facts=document.getElementById('facts'+select);
  if(selectedModel!==0)
  {
    if(deleted1==false && select==1)
    {
      document.getElementById('model'+select).remove(0);
      selectedModel=selectedModel-1;
      deleted1=true;
    }
    if(deleted2==false && select==2)
    {
      document.getElementById('model'+select).remove(0);

      selectedModel=selectedModel-1;
      deleted2=true;
    }
    document.getElementById('header'+select).innerHTML=products[selectedIndex][selectedModel].model;
    var out="";
    for (var p in products[selectedIndex][selectedModel]) {
      if(p!=='model')
      {
        console.log(p);
        out += products[selectedIndex][selectedModel][p] + '</br>';
      }
    }
    facts.innerHTML=out;
  }
}
