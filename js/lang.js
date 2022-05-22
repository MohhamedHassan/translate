let currentLang = localStorage.getItem('carsLang') || 'EN';
let bdy=document.getElementsByTagName('body')
if(currentLang=='AR') {
    Array.from(bdy).forEach(i =>  {
        i.classList.add('cstm-rtl')
    })
} else {
    Array.from(bdy).forEach(i =>  {
        i.classList.remove('cstm-rtl')
    })
}
if (document.getElementById('homepage')) {
       let welcomel = document.getElementById('welcomel')
    let wearethebest = document.getElementById('wearethebest')
    let onlinecarrental = document.getElementById('onlinecarrental')
    let fulltankcreativel = document.getElementById('fulltankcreativel')
    let welcometoservicecenter = document.getElementById('welcometoservicecenter')
    let welcometoservicecentertext = document.getElementById('welcometoservicecentertext')
    let resourcesall = document.getElementById('resourcesall')
    let wedding = document.getElementById('wedding')
    let FeaturedCar = document.getElementById('FeaturedCar')
    let forrent = document.getElementsByClassName('forrent')
    let Featuredl = document.getElementById('Featuredl')
    langtext.innerHTML = localStorage.getItem('carsLang') == 'AR' ? 'EN' : 'AR'
    let kiagrandcerato = document.getElementById('kiagrandcerato')
    let newcarl = document.getElementsByClassName('newcarl')
    let Automaticl = document.getElementsByClassName('Automaticl')
    let sportsl = document.getElementsByClassName('sportsl')
    let petrol = document.getElementsByClassName('petrol')
    let Manual = document.getElementsByClassName('Manual')
    let bluel = document.getElementsByClassName('bluel')
    let reviewl = document.getElementsByClassName('reviewl')
    let rentyourcar = document.getElementById('rentyourcar')
    let Lowestcarrental = document.getElementById('Lowestcarrental')
    let Thecheapestcar = document.getElementById('Thecheapestcar')
    let Carrentalattheairport = document.getElementById('Carrentalattheairport')
    let worryabout = document.getElementById('worryabout')
    let earnmore = document.getElementById('earnmore')
    let nowyoucan = document.getElementById('nowyoucan')
    let whatclientssay = document.getElementById('whatclientssay')
    let usernameone = document.getElementById('usernameone')
    let usejopone = document.getElementById('usejopone')
    let usertextone = document.getElementById('usertextone')
    let usernametwo = document.getElementById('usernametwo')
    let usejoptwo = document.getElementById('usejoptwo')
    let usertexttwo = document.getElementById('usertexttwo')
    let totalcars = document.getElementById('totalcars')
    let DealerReviews = document.getElementById('DealerReviews')
    let HappyClients = document.getElementById('HappyClients')
    let AwardsWinning = document.getElementById('AwardsWinning')
    let ourblog = document.getElementById('ourblog')
    let ourblogname1 = document.getElementById('ourblogname1')
    let ourblogtitle1 = document.getElementById('ourblogtitle1')
    let ourblogtext1 = document.getElementById('ourblogtext1')
    let ourblogname2 = document.getElementById('ourblogname2')
    let ourblogtitle2 = document.getElementById('ourblogtitle2')
    let ourblogtext2 = document.getElementById('ourblogtext2')
    let ourblogname3 = document.getElementById('ourblogname3')
    let ourblogtitle3 = document.getElementById('ourblogtitle3')
    let ourblogtext3 = document.getElementById('ourblogtext3')
    function setLang(lang) {
        if (lang == 'AR') {
           
           
            welcomel.innerHTML = 'مرحبا بك في فل تانك'
            fulltankcreativel.innerHTML = 'فل تانك تطبيقاتك الابداعية'
            welcometoservicecenter.innerHTML = 'مرحبا بك في مركز الخدمات'
            welcometoservicecentertext.innerHTML = `
        فل تانك - شركة تابعة لشركة الجميل لتأجير السيارات وتوصيلها ، تقدم فل تانك لعملائها أرخص سعر لتأجير السيارات ، مع وبدون سائق ، وأفضل قيمة لأصحاب السيارات. جميع السيارات مؤمنة بتأمين شامل ويوجد أجهزة تتبع للسيارة ويتم كتابة عقد لذلك`
            resourcesall.innerHTML = `طمئن جميع السائقين من خلال تطبيق فل تانك  ، فبياناتهم مسجلة لدينا وبيانات سياراتهم ، فأنت في أمان.`
            wedding.innerHTML = `خدمات تأجير السيارات لحفلات الزفاف والزفاف والمؤتمرات بأفضل الأسعار وأرقى الرفاهية.`
            FeaturedCar.innerHTML = 'سيارات مميزة'
            Array.from(forrent).forEach(i => {
                i.innerHTML = 'للايجار'
            })
            Featuredl.innerHTML = 'متميز'
            kiagrandcerato.innerHTML = 'كيا جراند سيارتو'
            Array.from(newcarl).forEach(i => {
                i.innerHTML = 'سيارة جديدة'
            })
            Array.from(Automaticl).forEach(i => {
                i.innerHTML = 'اتوماتيك'
            })
            Array.from(sportsl).forEach(i => {
                i.innerHTML = 'رياضة'
            })
            Array.from(reviewl).forEach(i => {
                i.innerHTML = 'مراجعات'
            })
            Array.from(petrol).forEach(i => {
                i.innerHTML = 'بنزين'
            })
            Array.from(Manual).forEach(i => {
                i.innerHTML = 'يدوي'
            })
            Array.from(bluel).forEach(i => {
                i.innerHTML = 'ازرق'
            })
            wearethebest.innerHTML = 'نحن  <span>الافضل </span>'
            onlinecarrental.innerHTML = 'تأجير السيارات عبر الإنترنت بدون مكتب لتأجير السيارات'
            rentyourcar.innerHTML = 'استأجر سيارتك في خمس دقائق ، استأجر سيارة بدون إيصال ثقة ، فقط عقد إيجار لضمان حقوق جميع الأطراف.'
            Lowestcarrental.innerHTML = 'أقل سعر لتأجير السيارات'
            Thecheapestcar.innerHTML = `ارخص اسعار ايجار سيارات في مصر بأسعار قابلة للتفاوض ايجار يومي او اسبوعي او شهري. اختر أنسب سعر وأنسب سيارة لك.
        `
            Carrentalattheairport.innerHTML = 'تأجير السيارات في المطار'
            worryabout.innerHTML = `لا تقلق بشأن الاستلام والتسليم. يمكنك طلب السيارة في أي مكان تحدده للاستلام ، وسيتم تسليم سيارتك إليك. يمكنك الحصول عليه في أي مكان تحدده`
            earnmore.innerHTML = `اكسب أكثر من تشغيل سيارتك`
            nowyoucan.innerHTML = `الآن يمكنك تشغيل سيارتك بخزان ممتلئ ، واختيار الوقت المناسب والسعر المناسب لك ولسيارتك ، وتحقيق أعلى ربح يصل إلى 600 دولار شهريًا.
        `
            whatclientssay.innerHTML = `ما يقوله 
        <span> العملاء</span>`
            usernameone.innerHTML = 'مارينا'
            usejopone.innerHTML = 'مستشار'
            usertextone.innerHTML = `"بيتكوين هي واحدة من أهم الاختراعات في تاريخ البشرية. ولأول مرة على الإطلاق ، يمكن لأي شخص إرسال أو تلقي أي مبلغ من المال.
        `
            usernametwo.innerHTML = 'مارينا'
            usejoptwo.innerHTML = 'مصمم ويب'
            usertexttwo.innerHTML = `"بيتكوين هي واحدة من أهم الاختراعات في تاريخ البشرية. ولأول مرة على الإطلاق ، يمكن لأي شخص إرسال أو تلقي أي مبلغ من المال.
        `
            totalcars.innerHTML = 'أجمالي السيارات'
            DealerReviews.innerHTML = 'مراجعات التجار'
            HappyClients.innerHTML = 'عملاء سعداء '
            AwardsWinning.innerHTML = 'الحائز على الجوائز'
            ourblog.innerHTML = `مدونتنا`
            ourblogname1.innerHTML=`ماريا بلانك `
            ourblogtitle1.innerHTML=`بيع منزلك الحقيقي
            `
            ourblogtext1.innerHTML=` إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور.
            
            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايس`
            footertext.innerHTML=` إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور.
            
            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايس`
            ourblogname2.innerHTML=`براندون ميلر `
            ourblogtitle2.innerHTML=`ابحث عن سيارة أحلامك
            `
            ourblogtext2.innerHTML=` إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور.
            
            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايس`
            ourblogname3.innerHTML=`براندون ميلر `
            ourblogtitle3.innerHTML=`ابحث عن سيارة أحلامك
            `
            ourblogtext3.innerHTML=` إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور.
            
            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايس`
            
        } else {
           
            welcomel.innerHTML = 'Welcome To Foltank'
            fulltankcreativel.innerHTML = 'Foltank Your Creative Apps'
            welcometoservicecenter.innerHTML = 'Welcome to service center'
            welcometoservicecentertext.innerHTML = `FOLTANK - A subsidiary of AL-JAMIL car rental and delivery company, FOLTANK offers its customers the cheapest car rental price, with and without driver, and the best value for car owners. All cars are insured with comprehensive insurance and there are car tracking devices, and a contract is written for that`
            resourcesall.innerHTML = `Reassure all drivers with the Full Tank application, their data is registered with us and the data of their cars, you are safe.`
            wedding.innerHTML = `Wedding, wedding and conference car rental services at the best prices and the highest luxury.`
            FeaturedCar.innerHTML = 'Featured Car'
            Array.from(forrent).forEach(i => {
                i.innerHTML = 'For Rent'
            })
            Array.from(reviewl).forEach(i => {
                i.innerHTML = 'Reviews'
            })
            Featuredl.innerHTML = 'Featured'
            kiagrandcerato.innerHTML = 'Kia Grand Cerato'
            Array.from(newcarl).forEach(i => {
                i.innerHTML = ' new car'
            })
            Array.from(Automaticl).forEach(i => {
                i.innerHTML = 'Automatic'
            })
            Array.from(sportsl).forEach(i => {
                i.innerHTML = 'Sports'
            })
            Array.from(petrol).forEach(i => {
                i.innerHTML = 'Petrol'
            })
            Array.from(Manual).forEach(i => {
                i.innerHTML = 'Manual'
            })
            Array.from(bluel).forEach(i => {
                i.innerHTML = 'blue'
            })
            wearethebest.innerHTML = 'We Are <span>The Best</span>'
            onlinecarrental.innerHTML = 'Online car rental without a car rental office'
            rentyourcar.innerHTML = 'Rent your car in five minutes, rent a car without a trust receipt, only a rental contract to guarantee the rights of all parties.'
            Lowestcarrental.innerHTML = 'Lowest car rental price'
            Thecheapestcar.innerHTML = 'The cheapest car rental price in Egypt, negotiable prices, daily, weekly or monthly rent. Choose the most suitable price and the most suitable car for you.'
            Carrentalattheairport.innerHTML = 'Car rental at the airport'
            worryabout.innerHTML = `Don't worry about pickup and delivery. You can order the car at any place you specify for pickup, and your car will be delivered to you. You can receive it anywhere you specify`
            earnmore.innerHTML = `Earn more from running your car`
            nowyoucan.innerHTML = `Now you can operate your car with a full tank, choose the right time and price for you and your car, and make the highest profit up to $600 per month. `
            whatclientssay.innerHTML = 'What Clients <span> Say</span>'
            usernameone.innerHTML = 'Marina'
            usejopone.innerHTML = 'Consultant'
            usertextone.innerHTML = `"Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money .Lorem ipsum dolor sit amet consectetur adipisicing elit."`
            usernametwo.innerHTML = 'Marina'
            usejoptwo.innerHTML = ' Web Designer, Uk'
            usertexttwo.innerHTML = `""Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money .Lorem ipsum dolor sit amet consectetur adipisicing elit.".
        `
            totalcars.innerHTML = 'Total Cars'
            DealerReviews.innerHTML = 'Dealer Reviews'
            HappyClients.innerHTML = 'Happy Clients'
            AwardsWinning.innerHTML = 'Awards Winning'
            ourblog.innerHTML = `Our <span>Blog</span>`
            ourblogname1.innerHTML=`Maria Blank`
            ourblogtitle1.innerHTML=`Selling Your Real House`
            ourblogtext1.innerHTML=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
            footertext.innerHTML=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
            ourblogname2.innerHTML=`Brandon Miller`
            ourblogtitle2.innerHTML=`Find Your Dream Car`
            ourblogtext2.innerHTML=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
            ourblogname3.innerHTML=`Brandon Miller`
            ourblogtitle3.innerHTML=`Find Your Dream Car`
            ourblogtext3.innerHTML=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
        }

    }
    typesofcar() 
}
if (document.getElementById('aboutpage')) {
   let WELCOMETOFOLLTANK = document.getElementById('WELCOMETOFOLLTANK')
   let aboutfirsttext = document.getElementById('aboutfirsttext')
   let aboutsecondtext= document.getElementById('aboutsecondtext')
   let wearethebest= document.getElementById('wearethebest')
   let wearethebest1= document.getElementById('wearethebest1')
   let wearethebest2= document.getElementById('wearethebest2')
   let wearethebest3= document.getElementById('wearethebest3')
   let wearethebest4= document.getElementById('wearethebest4')
   let wearethebesttext1= document.getElementById('wearethebesttext1')
   let wearethebesttext2= document.getElementById('wearethebesttext2')
   let wearethebesttext3= document.getElementById('wearethebesttext3')
   let wearethebesttext4= document.getElementById('wearethebesttext4')
   let whatclientssay = document.getElementById('whatclientssay')
   let usernameone = document.getElementById('usernameone')
   let usejopone = document.getElementById('usejopone')
   let usertextone = document.getElementById('usertextone')
   let usernametwo = document.getElementById('usernametwo')
   let usejoptwo = document.getElementById('usejoptwo')
   let usertexttwo = document.getElementById('usertexttwo')

   function setLang(lang) {
    if (lang == 'AR') {
       
       
        WELCOMETOFOLLTANK.innerHTML = 'مرحبا بك في فل تانك'
        aboutfirsttext.innerHTML = `اشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
        نيولا باراياتيور. أيكس`
        aboutsecondtext.innerHTML = `اشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
        نيولا باراياتيور. أيكس`  
        wearethebest.innerHTML=`نحن  <span>الافضل </span>`
         wearethebest1.innerHTML= `عالي الأمان`
         wearethebest2.innerHTML= `الوكلاء الموثوق بهم         `
         wearethebest3.innerHTML= `احصل على عرض`
         wearethebest4.innerHTML= `دعم مجاني`
         wearethebesttext1.innerHTML=  `اشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
         نيولا باراياتيور. أيكس`
         wearethebesttext2.innerHTML=  `اشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
         نيولا باراياتيور. أيكس`
         wearethebesttext3.innerHTML=  `اشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
         نيولا باراياتيور. أيكس`
         wearethebesttext4.innerHTML=  `اشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
         نيولا باراياتيور. أيكس`  
         whatclientssay.innerHTML = `ما يقوله 
         <span> العملاء</span>`
             usernameone.innerHTML = 'مارينا'
             usejopone.innerHTML = 'مستشار'
             usertextone.innerHTML = `"بيتكوين هي واحدة من أهم الاختراعات في تاريخ البشرية. ولأول مرة على الإطلاق ، يمكن لأي شخص إرسال أو تلقي أي مبلغ من المال.
         `
             usernametwo.innerHTML = 'مارينا'
             usejoptwo.innerHTML = 'مصمم ويب'
             usertexttwo.innerHTML = `"بيتكوين هي واحدة من أهم الاختراعات في تاريخ البشرية. ولأول مرة على الإطلاق ، يمكن لأي شخص إرسال أو تلقي أي مبلغ من المال.
         `      
    } else {
       
        WELCOMETOFOLLTANK.innerHTML = 'Welcome To Foltank'
        aboutfirsttext.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur maxime alias enim non porro molestias illum quas repellat sapiente laborum!'
        aboutsecondtext.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur maxime alias enim non porro molestias illum quas repellat sapiente laborum!` 
        wearethebest.innerHTML=`We Are <span>The Best</span>`
        wearethebest1.innerHTML= `Highly Secured`
        wearethebest2.innerHTML= `Trusted Agents`
        wearethebest3.innerHTML= `Get an Offer`
        wearethebest4.innerHTML= `Free Support`
        wearethebesttext1.innerHTML= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus.`
        wearethebesttext2.innerHTML= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus.`
        wearethebesttext3.innerHTML= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus.`
        wearethebesttext4.innerHTML= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus.` 
        whatclientssay.innerHTML = `ما يقوله 
        <span> العملاء</span>`
            usernameone.innerHTML = 'مارينا'
            usejopone.innerHTML = 'مستشار'
            usertextone.innerHTML = `"بيتكوين هي واحدة من أهم الاختراعات في تاريخ البشرية. ولأول مرة على الإطلاق ، يمكن لأي شخص إرسال أو تلقي أي مبلغ من المال.
        `
            usernametwo.innerHTML = 'مارينا'
            usejoptwo.innerHTML = 'مصمم ويب'
            usertexttwo.innerHTML = `"بيتكوين هي واحدة من أهم الاختراعات في تاريخ البشرية. ولأول مرة على الإطلاق ، يمكن لأي شخص إرسال أو تلقي أي مبلغ من المال.
        `     
    }

}
}
if (document.getElementById('blogdetails')) {
  
}
if (document.getElementById('blogpost')) {
       let mariablank = document.getElementsByClassName('mariablank')
    let SellingYourRealHouse = document.getElementsByClassName('SellingYourRealHouse')
    let text = document.getElementsByClassName('text')
    function setLang(lang) {
    
        if (lang == 'AR') {

            Array.from(mariablank).forEach(i => {
                i.innerHTML = ' ماريا بلانك'
            })
      Array.from(SellingYourRealHouse).forEach(i => {
                i.innerHTML = ' بيع منزلك'
            })
            Array.from(text).forEach(i => {
                i.innerHTML = 'لوريم ابسيوم كاتوم نهخ لوريم ابسيوم كاتوم نهخ '
            })
        } else {
            Array.from(mariablank).forEach(i => {
                i.innerHTML = 'Maria Blank'
            })
            Array.from(SellingYourRealHouse).forEach(i => {
                i.innerHTML = 'Selling Your RealHouse'
            })
            Array.from(text).forEach(i => {
                i.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
            })
        }
    
    }
}
if (document.getElementById('cardetails')) {
    let reviewsl = document.getElementsByClassName('reviewsl')
    let featuredl= document.getElementsByClassName('featuredl')
    let forrent = document.getElementsByClassName('forrent')
    let descriptionl = document.getElementsByClassName('descriptionl')
    let Features = document.getElementsByClassName('Featuresl')
    let RelatedCar = document.getElementsByClassName('RelatedCar')
    let Specifications = document.getElementsByClassName('Specifications')
    let Location = document.getElementsByClassName('Location')
    let video = document.getElementsByClassName('video')
    let decriptionone = document.getElementById('decriptionone')
    let decriptiontwo = document.getElementById('decriptiontwo')
    let GetaQuestion= document.getElementById('GetaQuestion')
    let AdaptiveCruiseControl= document.getElementById('AdaptiveCruiseControl')
    let Airbags= document.getElementById('Airbags')
    let AirConditioning= document.getElementById('AirConditioning')
    let AlarmSystem= document.getElementById('AlarmSystem')
    let AntitheftProtection= document.getElementById('AntitheftProtection')
    let AudioInterface= document.getElementById('AudioInterface')
    let AutomaticClimateControl= document.getElementById('AutomaticClimateControl')
    let AutomaticHeadlights= document.getElementById('AutomaticHeadlights')
    let AutoStartStop= document.getElementById('AutoStartStop')
    let BiXenonHeadlights= document.getElementById('BiXenonHeadlights')
    let BluetoothHandset= document.getElementById('BluetoothHandset')
    let BOSESurroundSound= document.getElementById('BOSESurroundSound')
    let BurmesterSurroundSound= document.getElementById('BurmesterSurroundSound')
    let CDDVDAutochanger= document.getElementById('CDDVDAutochanger')
    let newcarl = document.getElementsByClassName('newcarl')
    let Automaticl = document.getElementsByClassName('Automaticl')
    let sportsl = document.getElementsByClassName('sportsl')
    let petrol = document.getElementsByClassName('petroll')
    let Manual = document.getElementsByClassName('Manual')
    let bluel = document.getElementsByClassName('bluel')
    let TopSpeed = document.getElementById('TopSpeed')
    let FuelType  = document.getElementById('FuelType')
    let Mileage = document.getElementById('Mileage') 
    let Engine = document.getElementById('Mileage')
    let Gear= document.getElementById('Gear')

    // let CDRAudio= document.getElementById('CDRAudio')
    // let CruiseControl= document.getElementById('CruiseControl')
    // let DirectFuelInjection= document.getElementById('DirectFuelInjection')
    // let ElectricParkingBrake= document.getElementById('ElectricParkingBrake')
    // let FloorMats= document.getElementById('FloorMats')
    // let GetaQuesGarageDoorOpenertion= document.getElementById('GetaQuesGarageDoorOpenertion')
    // let LeatherPackage= document.getElementById('LeatherPackage')
    // let LockingRearDifferential= document.getElementById('LockingRearDifferential')
    // let LuggageCompartments= document.getElementById('LuggageCompartments')
    // let ManualTransmission= document.getElementById('ManualTransmission')
    // let NavigationModule= document.getElementById('NavigationModule')
    // let OnlineServices= document.getElementById('OnlineServices')
    // let ParkAssist= document.getElementById('ParkAssist')
    // let PorscheCommunication= document.getElementById('PorscheCommunication')
    // let PowerSteering= document.getElementById('PowerSteering')
    // let ReversingCamera= document.getElementById('ReversingCamera')
    // let RolloverProtection= document.getElementById('RolloverProtection')
    // let SeatHeating= document.getElementById('SeatHeating')
    // let SeatVentilation= document.getElementById('SeatVentilation')
    // let SoundPackagePlus= document.getElementById('SoundPackagePlus')
    // let SportChronoPackage= document.getElementById('SportChronoPackage')
    // let SteeringWheelHeating= document.getElementById('SteeringWheelHeating')
    // let TirePressureMonitoring= document.getElementById('TirePressureMonitoring')
    // let UniversalAudioInterface= document.getElementById('UniversalAudioInterface')
    // let VoiceControlSystem= document.getElementById('VoiceControlSystem')
    // let WindDeflector= document.getElementById('WindDeflector')
    function setLang(lang) {
    
        if (lang == 'AR') {
            TopSpeed.innerHTML='السرعة القصوى: 270            '
            FuelType.innerHTML='نوع الوقود: ديزل            '
            Mileage.innerHTML='المسافة المقطوعة: 35،200 كم'
            Engine.innerHTML='المحرك: 2901'
            Gear.innerHTML='العتاد: 4'
            // Array.from(mariablank).forEach(i => {
            //     i.innerHTML = ' ماريا بلانك'
            // })
            // console.log(mariablank)
            Array.from(newcarl).forEach(i => {
                i.innerHTML = 'سيارة جديدة'
            })
            Array.from(Automaticl).forEach(i => {
                i.innerHTML = 'اتوماتيك'
            })
            Array.from(sportsl).forEach(i => {
                i.innerHTML = 'رياضة'
            })
            Array.from(petrol).forEach(i => {
                i.innerHTML = ' <i class="flaticon-fuel"></i> بنزين'
            })
            Array.from(bluel).forEach(i => {
                i.innerHTML = 'ازرق'
            })
            Array.from(featuredl).forEach(i =>  {
                i.innerHTML='مميز'
            })
            CDDVDAutochanger.innerHTML='مبدل تلقائي لقرص CD DVD'
            BurmesterSurroundSound.innerHTML='صوت بورميستر المحيطي'
            BOSESurroundSound.innerHTML='نظام الصوت المحيطي من بوز'
            BluetoothHandset.innerHTML='سماعة بلوتوث'
            BiXenonHeadlights.innerHTML='المصابيح الأمامية زينون ثنائية            '
            AutoStartStop.innerHTML='إيقاف التشغيل التلقائي'
            AutomaticHeadlights.innerHTML='المصابيح الأمامية التلقائية'
            AutomaticClimateControl.innerHTML='تحكم آلي بالمناخ            '
            AudioInterface.innerHTML='واجهة الصوت'
            AntitheftProtection.innerHTML='حماية ضد السرقة            '
            AlarmSystem.innerHTML='نظام انذار'
            AirConditioning.innerHTML='تكيف'
            Airbags.innerHTML='وسائد هوائية'
            AdaptiveCruiseControl.innerHTML='نظام تثبيت السرعة التكيفي            '
            
            Array.from(forrent).forEach(i =>  {
                i.innerHTML='للايجار'
            })
            Array.from(video).forEach(i =>  {
                i.innerHTML='فيديو'
            })
            GetaQuestion.innerHTML='للاستفسار'
                decriptionone.innerHTML=`وت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

                أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
                
                أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
                
                نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا
                
                كيو أوفيسيا ديسيريونتموليت ا`
                decriptiontwo.innerHTML=`وت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد

                أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس
                
                أيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
                
                نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون بروايدينت ,سيونت ان كيولبا
                
                كيو أوفيسيا ديسيريونتموليت ا`
            
            Array.from(Location).forEach(i =>  {
                i.innerHTML='الموقع'
            })
            Array.from(Specifications).forEach(i =>  {
                i.innerHTML='تحديد'
            })
            Array.from(RelatedCar).forEach(i =>  {
                i.innerHTML='السيارات ذات الصلة  '
            })
            Array.from(descriptionl).forEach(i =>  {
                i.innerHTML='الوصف'
            })
            Array.from(Features).forEach(i =>  {
                i.innerHTML='المميزات'
            })
            Array.from(reviewsl).forEach(i =>  {
                i.innerHTML='مراجعات'
            })
        } else {
            // Array.from(mariablank).forEach(i => {
            //     i.innerHTML = 'Maria Blank'
            // })
            TopSpeed.innerHTML='Top Speed: 270            '
            FuelType.innerHTML='Fuel Type: Diesel'
            Mileage.innerHTML='Mileage: 35,200 KM'
            Engine.innerHTML='Engine: 2901'
            Gear.innerHTML='Gear: 4'
            Array.from(newcarl).forEach(i => {
                i.innerHTML = ' new car'
            })
            Array.from(Automaticl).forEach(i => {
                i.innerHTML = 'Automatic'
            })
            Array.from(sportsl).forEach(i => {
                i.innerHTML = 'Sports'
            })
            Array.from(petrol).forEach(i => {
                i.innerHTML = ' <i class="flaticon-fuel"></i> Petrol'
            })
            
            Array.from(Manual).forEach(i => {
                i.innerHTML = 'Manual'
            })
            Array.from(bluel).forEach(i => {
                i.innerHTML = 'blue'
            })
            Array.from(reviewsl).forEach(i =>  {
                i.innerHTML='Reviews'
            })
            Array.from(featuredl).forEach(i =>  {
                i.innerHTML='Featured'
            })
            Array.from(forrent).forEach(i =>  {
                i.innerHTML='For Rent'
            })
            CDDVDAutochanger.innerHTML='CD DVD Auto changer'
            BurmesterSurroundSound.innerHTML='Burmester Surround Sound'
            BOSESurroundSound.innerHTML='BOSE Surround Sound'
            BluetoothHandset.innerHTML=' Bluetooth Handset'
            BiXenonHeadlights.innerHTML='Bi-Xenon Headlights'
            AutoStartStop.innerHTML='Auto Start Stop'
            AutomaticHeadlights.innerHTML='  Automatic Headlights'
            AutomaticClimateControl.innerHTML='Automatic Climate Control'
            AudioInterface.innerHTML=' Audio Interface'
            AntitheftProtection.innerHTML='Anti theft Protection'
            AlarmSystem.innerHTML=' Alarm System'
            AirConditioning.innerHTML='Air Conditioning'
            Airbags.innerHTML='Airbags'
            AdaptiveCruiseControl.innerHTML='Adaptive Cruise Control'
            GetaQuestion.innerHTML='Get a Question ?'
                decriptionone.innerHTML=`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo est ratione mollitia asperiores, optio nulla exercitationem assumenda laudantium suscipit ullam, doloremque quis pariatur, aspernatur ipsam provident reiciendis labore doloribus inventore.`
                decriptiontwo.innerHTML=`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo est ratione mollitia asperiores, optio nulla exercitationem assumenda laudantium suscipit ullam, doloremque quis pariatur, aspernatur ipsam provident reiciendis labore doloribus inventore.`
            
            Array.from(Location).forEach(i =>  {
                i.innerHTML='Location'
            })
            Array.from(video).forEach(i =>  {
                i.innerHTML='Video'
            })
            Array.from(Specifications).forEach(i =>  {
                i.innerHTML='Specifications'
            })
            Array.from(RelatedCar).forEach(i =>  {
                i.innerHTML='Related Car'
            })
            Array.from(descriptionl).forEach(i =>  {
                i.innerHTML='Features'
            })
        }
    
    }
}
if (document.getElementById('carlist')) {
    let carlisting = document.getElementsByClassName('carlisting')
    let featured = document.getElementsByClassName('featured')
    let forrent = document.getElementsByClassName('forrent')
    let newcarl = document.getElementsByClassName('newcarl')
    let Automaticl = document.getElementsByClassName('Automaticl')
    let sportsl = document.getElementsByClassName('sportsl')
    let petrol = document.getElementsByClassName('petrol')
    let Manual = document.getElementsByClassName('Manual')
    let bluel = document.getElementsByClassName('bluel')
    let Lamborghini = document.getElementById('Lamborghini')
    let FERRARIREDCAR = document.getElementById('FERRARIREDCAR')
    let GetaQuestion = document.getElementById('GetaQuestion')
    function setLang(lang) {
        if (lang == 'AR') {
            GetaQuestion.innerHTML='للاستفسار'
            FERRARIREDCAR.innerHTML='سيارة فيراري حمراء '
            Lamborghini.innerHTML='لامبورجيني'
            Array.from(newcarl).forEach(i => {
                i.innerHTML = 'سيارة جديدة'
            })
            Array.from(Automaticl).forEach(i => {
                i.innerHTML = 'اتوماتيك'
            })
            Array.from(sportsl).forEach(i => {
                i.innerHTML = 'رياضة'
            })
            Array.from(petrol).forEach(i => {
                i.innerHTML = 'بنزين'
            })
            Array.from(Manual).forEach(i => {
                i.innerHTML = 'يدوي'
            })
            Array.from(bluel).forEach(i => {
                i.innerHTML = 'ازرق'
            })
            Array.from(carlisting).forEach(
                i => {
                    i.innerHTML='قائمة السيارات'
                }
            )
            Array.from(featured).forEach(
                i => {
                    i.innerHTML='مميز'
                }
            )
            Array.from(forrent).forEach(
                i => {
                    i.innerHTML='للايجار'
                }
            )
        } else {
            GetaQuestion.innerHTML='Get a Question?'
            FERRARIREDCAR.innerHTML='FERRARI RED CAR'
            Lamborghini.innerHTML='Lamborghini'
            Array.from(newcarl).forEach(i => {
                i.innerHTML = ' new car'
            })
            Array.from(Automaticl).forEach(i => {
                i.innerHTML = 'Automatic'
            })
            Array.from(sportsl).forEach(i => {
                i.innerHTML = 'Sports'
            })
            Array.from(petrol).forEach(i => {
                i.innerHTML = 'Petrol'
            })
            Array.from(Manual).forEach(i => {
                i.innerHTML = 'Manual'
            })
            Array.from(bluel).forEach(i => {
                i.innerHTML = 'blue'
            })
            Array.from(featured).forEach(
                i => {
                    i.innerHTML='Featured'
                }
            )
            Array.from(carlisting).forEach(
                i => {
                    i.innerHTML='Car List'
                }
            )
            Array.from(forrent).forEach(
                i => {
                    i.innerHTML='For Rent'
                }
            )
        }
    
    }
}

if (document.getElementById('PRICINGTABLES')) {
    let maintext = document.getElementById('maintext')
    let UnlimitedWebsites = document.getElementsByClassName('UnlimitedWebsites')
    let UnlimitedStorage = document.getElementsByClassName('UnlimitedStorage')
    let UnlimitedBandwidth= document.getElementsByClassName('UnlimitedBandwidth')
    let getstarted= document.getElementsByClassName('getstarted')
    let EmailAddresses=document.getElementsByClassName('EmailAddresses')
    let Freedomainwithannualplan=document.getElementsByClassName('Freedomainwithannualplan')
    let ProcessingPower=document.getElementsByClassName('ProcessingPower')
    let PremiumDNS=document.getElementsByClassName('PremiumDNS')
    let month=document.getElementsByClassName('month')
    let Planshortdescription=document.getElementsByClassName('Planshortdescription')
    let UltimatePlan=document.getElementById('UltimatePlan')
    let DeluxePlan=document.getElementById('DeluxePlan')
    let ProfessionalPlan=document.getElementById('ProfessionalPlan')

    function setLang(lang) {
        if (lang == 'AR') {
            
             UltimatePlan.innerHTML=`الخطة النهائية             `
             DeluxePlan.innerHTML=`خطة فاخرة             `
             ProfessionalPlan.innerHTML=`الخطة المهنية`
            maintext.innerHTML=  `ذات صباح ، عندما استيقظ جريجور سامسا من أحلام مضطربة ، وجد نفسه متحولًا في سريره إلى حشرات مروعة. كان مستلقيًا على ظهره الذي يشبه الدروع ، وإذا رفع رأسه قليلاً يمكنه ذلك
            `
            Array.from(UnlimitedWebsites).forEach(i =>  {
                i.innerHTML='مواقع غير محدودة '
            })
            Array.from(UnlimitedStorage).forEach(i =>  {
                i.innerHTML=' تخزين غير محدود '
            })
            Array.from(UnlimitedBandwidth).forEach(i =>  {
                i.innerHTML=' نطاق ترددي غير محدود'
            })
            Array.from(getstarted).forEach(i =>  {
                i.innerHTML='البدء'
            })
            Array.from(EmailAddresses).forEach(i =>  {
                i.innerHTML='1000 بريد الكتروني'
            })
            Array.from(Freedomainwithannualplan).forEach(i =>  {
                i.innerHTML='دومين مجاني مع خطة سنوية'
            })
            Array.from(ProcessingPower).forEach(i =>  {
                i.innerHTML='4X قوة المعالجة '
            })
            Array.from(PremiumDNS).forEach(i =>  {
                i.innerHTML='DNS متميز '
            })
            Array.from(month).forEach(i =>  {
                i.innerHTML='شهر'
            })
            Array.from(Planshortdescription).forEach(i =>  {
                i.innerHTML='وصف موجز للخطة'
            })
            
        } else {
            UltimatePlan.innerHTML=`Ultimate Plan`
            DeluxePlan.innerHTML=`Deluxe Plan`
            ProfessionalPlan.innerHTML=`Professional Plan`
           maintext.innerHTML=  `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could`
           Array.from(UnlimitedWebsites).forEach(i =>  {
            i.innerHTML='Unlimited Websites'
        })
        Array.from(UnlimitedStorage).forEach(i =>  {
            i.innerHTML=' Unlimited Storage  '
        })
        Array.from(UnlimitedBandwidth).forEach(i =>  {
            i.innerHTML=' Unlimited Bandwidth'
        })
        Array.from(getstarted).forEach(i =>  {
            i.innerHTML='Get Started'
        })
        Array.from(EmailAddresses).forEach(i =>  {
            i.innerHTML=' 1000 Email Addresses'
        })
        Array.from(Freedomainwithannualplan).forEach(i =>  {
            i.innerHTML='Free domain with annual plan'
        })
        Array.from(ProcessingPower).forEach(i =>  {
            i.innerHTML='4X Processing Power'
        })
        Array.from(PremiumDNS).forEach(i =>  {
            i.innerHTML='Premium DNS'
        })

        Array.from(month).forEach(i =>  {
            i.innerHTML='month'
        })
        Array.from(Planshortdescription).forEach(i =>  {
            i.innerHTML='Plan short description'
        })
        }
    
    }
}
if (document.getElementById('servicePage')) {
   
    let ourservice = document.getElementById('ourservice')
    let ourservicetext = document.getElementById('ourservicetext')
    let readmorel= document.getElementsByClassName('readmorel')
    let service1= document.getElementById('service1')
    let servicetext1= document.getElementById('servicetext1')
    let service2= document.getElementById('service2')
    let servicetext2= document.getElementById('servicetext2')
    let service3= document.getElementById('service3')
    let servicetext3= document.getElementById('servicetext3')
    let service4= document.getElementById('service4')
    let servicetext4= document.getElementById('servicetext4')
    let service5= document.getElementById('service5')
    let servicetext5= document.getElementById('servicetext5')
    let service6= document.getElementById('service6')
    let servicetext6= document.getElementById('servicetext6')
    let service7= document.getElementById('service7')
    let servicetext7= document.getElementById('servicetext7')
    let service8= document.getElementById('service8')
    let servicetext8= document.getElementById('servicetext8')
    let totalcars = document.getElementById('totalcars')
    let DealerReviews = document.getElementById('DealerReviews')
    let HappyClients = document.getElementById('HappyClients')
    let AwardsWinning = document.getElementById('AwardsWinning')
    let WELCOMETOSERVICECENTER = document.getElementById('WELCOMETOSERVICECENTER')
    let welcome1 = document.getElementById('welcome1')
    let welcome2 = document.getElementById('welcome2')
    let welcome3 = document.getElementById('welcome3')
    function setLang(lang) {
     if (lang == 'AR') {
         welcome1.innerHTML=  `ذات صباح ، عندما استيقظ جريجور سامسا من أحلام مضطربة ، وجد نفسه متحولًا في سريره إلى حشرات مروعة. كان مستلقيًا على ظهره الذي يشبه الدروع ، وإذا رفع رأسه قليلاً يمكنه ذلك
         `
         welcome2.innerHTML=  `
         عندما استيقظ جريجور سامسا من أحلام مضطربة ، وجد نفسه يتحول في سريره إلى حشرات مروعة. كان مستلقيًا على ظهره الذي يشبه الدروع ، وإذا رفع رأسه قليلاً يمكنه أن يرى نفسه قد تغير.`
         welcome3.innerHTML=  `في الصباح ، عندما استيقظ جريجور سامسا من أحلام مضطربة ، وجد نفسه متحولًا في سريره إلى حشرات مروعة. كان مستلقيًا على ظهره الذي يشبه الدروع ، وإذا رفع رأسه قليلاً يمكنه رؤية نفسه.`
        WELCOMETOSERVICECENTER.innerHTML='مرحبا بك في مركز الخدمات'
        totalcars.innerHTML = 'أجمالي السيارات'
        DealerReviews.innerHTML = 'مراجعات التجار'
        HappyClients.innerHTML = 'عملاء سعداء '
        AwardsWinning.innerHTML = 'الحائز على الجوائز'
         service1.innerHTML= `دعم مجاني        `
     servicetext1.innerHTML=' إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت'
      service2.innerHTML=`سريع جدا      `
     servicetext2.innerHTML=' إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت'
     service3.innerHTML=`إصلاح`
     servicetext3.innerHTML=' إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت'
     service4.innerHTML=`تكيف`
     servicetext4.innerHTML=' إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت'
     service5.innerHTML=`تغيير زيت     `
     servicetext5.innerHTML=' إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت'
     service6.innerHTML=`إصلاح المحرك     `
     servicetext6.innerHTML=' إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت'
     service7.innerHTML=`وكالة`
     servicetext7.innerHTML=' إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت'
     service8.innerHTML=`حماية`
     servicetext8.innerHTML=' إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت'
        Array.from(readmorel).forEach(i => {
            i.innerHTML = 'المزيد...'
        })
        ourservice.innerHTML = 'خدماتنا'
        ourservicetext.innerHTML = ' إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت'
     } else {
        welcome1.innerHTML=  `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could`
        welcome2.innerHTML=  `When Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see himself transformed.`
        welcome3.innerHTML=  `morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see himself.`
        Array.from(readmorel).forEach(i => {
            i.innerHTML = 'Read more...'
        })
        WELCOMETOSERVICECENTER.innerHTML='WELCOME TO SERVICE CENTER'
        totalcars.innerHTML = 'Total Cars'
        DealerReviews.innerHTML = 'Dealer Reviews'
        HappyClients.innerHTML = 'Happy Clients'
        AwardsWinning.innerHTML = 'Awards Winning'
        ourservice.innerHTML = 'Our Services'
        ourservicetext.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
        service1.innerHTML= `Free Support`
        servicetext1.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet`
         service2.innerHTML=`Super Fast`
        servicetext2.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet`
        service3.innerHTML=`Repairing`
        servicetext3.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet`
        service4.innerHTML=`AIR conditioning`
        servicetext4.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet`
        service5.innerHTML=`Oil Change`
        servicetext5.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet`
        service6.innerHTML=`Engine Repair`
        servicetext6.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet`
        service7.innerHTML=`Dealership`
        servicetext7.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet`
        service8.innerHTML=`Security`
        servicetext8.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt Lorem ipsum dolor sit amet`
     }
 
 }
}
if(document.getElementById('notfound')) {
    let langtext = document.getElementById('langtext')
    currentLang = localStorage.getItem('carsLang') || 'EN';
    let notfoundh5 =document.getElementById('notfoundh5')
    let notfundtext =document.getElementById('notfundtext')
    let gohome =document.getElementById('gohome')

        if (currentLang == 'AR') {
            notfoundh5.innerHTML='404 - الصفحة غير موجودة'
            notfundtext.innerHTML='ربما تمت إزالة الصفحة التي تبحث عنها وتغيير اسمها أو عدم توفرها مؤقتًا'
            gohome.innerHTML='رجوع للصفحة الرئيسية'
   
        } else {
            notfoundh5.innerHTML='404 - Page Not Found'
            notfundtext.innerHTML='The Page You Are Looking For Might have been removed had its name changed or is temporarily unavailable'
            gohome.innerHTML='Go To Home'
    
        }

    
}
if (document.getElementById('contactuspage')) {
    let maintext = document.getElementById('maintext')
    let SendusaMessage = document.getElementById('SendusaMessage')
    let floatingsubject = document.getElementById('floatingsubject')
    let floatingsubjectlabel = document.getElementById('floatingsubjectlabel')
    let floatingfullname = document.getElementById('floating-full-name')
    let floatingfullnamelabel = document.getElementById('floating-full-namelabel')
    let floatingemailaddress = document.getElementById('floating-email-address')
    let floatingemailaddresslabel = document.getElementById('floatingemailaddresslabel')
    let floatingphoneNumber  = document.getElementById('floating-phone-Number')
    let floatingphoneNumberlabel  = document.getElementById('floatingphoneNumberlabel')
    let floatingTextarea2  = document.getElementById('floatingTextarea2')
    let floatingTextarea2label  = document.getElementById('floatingTextarea2label')
    let sendsms  = document.getElementById('sendsms')
    let contactinfo = document.getElementById('contactinfo')
    let addressl = document.getElementById('addressl')
    let phonenumberl = document.getElementById('phonenumberl')
    let emailladd = document.getElementById('emailladd')
    let followuss = document.getElementById('followuss')
    function setLang(lang) {
        if (lang == 'AR') {
            followuss.innerHTML='متابعة'
            emailladd.innerHTML='البريد الالكتروني '
            phonenumberl.innerHTML='رقم الهاتف'
            addresstext.innerHTML='لوريم ابسيوم يسب فثليب تل يبلب'
            addressl.innerHTML='العنوان'
            contactinfo.innerHTML='معلومات التواصل'
            sendsms.innerHTML='ارسال'
            floatingTextarea2.setAttribute('placeholder','  التعليقات ')
            floatingTextarea2label.innerHTML='التعليقات '
            floatingphoneNumber.setAttribute('placeholder','  الهاتف ')
            floatingphoneNumberlabel.innerHTML='الهاتف '
            floatingemailaddress.setAttribute('placeholder',' البريد الالككتروني')
            floatingemailaddresslabel.innerHTML='البريد الالكتروني '
            floatingfullname.setAttribute('placeholder','الاسم كامل')
            floatingfullnamelabel.innerHTML='الاسم كامل'
             maintext.innerHTML=`أمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواس

             أيوتي أريري دولار إن ريب`
             SendusaMessage.innerHTML='ارسل لنا'
           floatingsubject.setAttribute('placeholder','الموضوع')
          floatingsubjectlabel.innerHTML='الموضوع'  
        } else {
            followuss.innerHTML='Follow US'
            emailladd.innerHTML='Email Address'
            phonenumberl.innerHTML='Phone Number'
            addresstext.innerHTML='Moonshine St. 14/05 Light City, London, United Kingdom'
            addressl.innerHTML='Address'
            contactinfo.innerHTML='Contact Info'
            sendsms.innerHTML='Send SMS'
            floatingTextarea2.setAttribute('placeholder','  Comments ')
            floatingTextarea2label.innerHTML='Comments '
            floatingphoneNumber.setAttribute('placeholder','  Phone Number')
            floatingphoneNumberlabel.innerHTML='Phone Number'
            floatingemailaddress.setAttribute('placeholder','  Email Address')
            floatingemailaddresslabel.innerHTML='Email Address  '
            floatingfullname.setAttribute('placeholder','Full Name')
            floatingfullnamelabel.innerHTML=' Full Name'
             maintext.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod`
             SendusaMessage.innerHTML='Send us a Message'
             floatingsubject.setAttribute('placeholder','Subject')
             floatingsubjectlabel.innerHTML='Subject' 
        }
    
    }
}
function coomonLang(lang){
    let langtext = document.getElementById('langtext')
    let langtexttow = document.getElementById('langtexttow')
    let homel = document.getElementsByClassName('homel')
    let aboutusl = document.getElementsByClassName('aboutusl')
    let servicel = document.getElementsByClassName('servicel')
    let blogl = document.getElementsByClassName('blogl')
    let contactl = document.getElementsByClassName('contactl')
    let pricingtablesl = document.getElementsByClassName('pricingtablesl')

    let pagesl = document.getElementById('pagesl')
  
    langtext.innerHTML = localStorage.getItem('carsLang') == 'AR' ? 'EN' : 'AR'
    langtexttow.innerHTML = localStorage.getItem('carsLang') == 'AR' ? 'EN' : 'AR'
  
    let carlisting = document.getElementById('carlisting')
    let elements = document.getElementById('elements')
    let UsefulLinks = document.getElementById('UsefulLinks')
    let footertext = document.getElementById('footertext')
    let ContactInfo = document.getElementById('ContactInfo')
    let footeraddress = document.getElementById('footeraddress')
    let Application = document.getElementById('Application')
   
        if (lang == 'AR') {
            // console.log(footertext)
            footertext.innerHTML=` إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت

            نيولا باراياتيور.
            
            كيو أوفيسيا ديسيريونتموليت انيم أيدي ايس`
            Application.innerHTML='تطبيقات '
            footeraddress.innerHTML=` <i class="flaticon-pin"></i>العنوان 44 نيو لاين `
            Array.from(homel).forEach(i => {
                i.innerHTML = 'الرئيسية'
            })
            Array.from(aboutusl).forEach(i => {
                i.innerHTML = 'من نحن'
            })
            Array.from(servicel).forEach(i => {
                i.innerHTML = ' خدمات'
            })
            Array.from(blogl).forEach(i => {
                i.innerHTML = ' مقالات'
            })
            Array.from(contactl).forEach(i => {
                i.innerHTML = ' تواصل معنا'
            })
            Array.from(pricingtablesl).forEach(i => {
                i.innerHTML = 'جداول التسعير'
            })
            ContactInfo.innerHTML='معلومات الاتصال'
            pagesl.innerHTML = 'الصفحات'
         
             carlisting.innerHTML='قائمة السيارات '
             elements.innerHTML='عناصر'
             UsefulLinks.innerHTML='روابط مفيدة' 
        } else {
            Application.innerHTML='Application'
            footeraddress.innerHTML=` <i class="flaticon-pin"></i>Address: 44 New Design Street, `
            ContactInfo.innerHTML=' Contact Info'
            Array.from(homel).forEach(i => {
                i.innerHTML = 'Home'
            })
            Array.from(aboutusl).forEach(i => {
                i.innerHTML = 'About-Us'
            })
            Array.from(servicel).forEach(i => {
                i.innerHTML = ' Services'
            })
            Array.from(blogl).forEach(i => {
                i.innerHTML = ' Blog'
            })
            Array.from(contactl).forEach(i => {
                i.innerHTML = '  Contact'
            })
            Array.from(pricingtablesl).forEach(i => {
                i.innerHTML = ' pricing-tables'
            })
            pagesl.innerHTML = 'Pages'
            
            carlisting.innerHTML='Car Listing'
            elements.innerHTML='Elements' 
            UsefulLinks.innerHTML='Useful Links' ;
            console.log(UsefulLinks)
            footertext.innerHTML=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque non adipisci placeat omnis asperiores debitis sit et error officiis. Architecto molestiae excepturi voluptate earum adipisci reiciendis facilis temporibus atque illum.`
        }

    
} 
if(!document.getElementById('notfound')) {
    coomonLang(currentLang)  
    setLang(currentLang)
}

 langtext.addEventListener('click', selectLang)
 langtexttow.addEventListener('click', selectLang)
function selectLang() {
    if (currentLang == 'AR') {
        currentLang = 'EN'
        langtext.innerHTML = 'AR'
        localStorage.setItem('carsLang', 'EN')
        if(!document.getElementById('notfound')) {
            coomonLang("EN")
             setLang("EN")
            
        }
        
    }
    else {
        currentLang = 'AR'
        langtext.innerHTML = 'EN'
        localStorage.setItem('carsLang', 'AR')
        if(!document.getElementById('notfound')) {

            coomonLang("AR")
            setLang("AR")
          
       }
        

    }
    if(currentLang=='AR') {
        Array.from(bdy).forEach(i =>  {
            i.classList.add('cstm-rtl')
        })
    } else {
        Array.from(bdy).forEach(i =>  {
            i.classList.remove('cstm-rtl')
        })
    }
    if(document.getElementById('homepage')) typesofcar()
}
function typesofcar() {
    if (currentLang == 'AR') {
        FeaturedCar.setAttribute('data-title', 'انواع السيارات');
    } else {
        FeaturedCar.setAttribute('data-title', 'Types of car');
    }

}
