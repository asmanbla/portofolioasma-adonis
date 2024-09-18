/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

//Halaman Dashboard
router.get('/dashboard', async ({ view }) => {
    return view.render('pages/dashboard')
})

//Halaman Home
router.on('/').render('pages/home')

//Halaman Project
router.get('/project', async ({ view }) => {
    return view.render('pages/project')
})

//Halaman Experience
router.get('/experience', async ({ view }) => {
    return view.render('pages/experience')
})

//Halaman Contact
router.get('/contact', async ({ view }) => {
    return view.render('pages/contact')
})

//Halaman Hobi
router.get('/hobies', async ({ view }) => {
    return view.render('pages/hobi')
})

//Halaman Login
router.on('/login').render('pages/login')

//Halaman Latihan
router.get('/halaman2', () => {
    return 'Ini adalah Halaman Web Selanjutnya'
})

router.get('/halamanid/:id', ({ params }) => {
    return `Ini adalah halaman untuk id ${params.id}`
})

router.get('/posthalaman', 'LatihansController.index')

router.get('/artikelasma', async ({ response }) => {
    const filePath = 'public/document/Kawal Keputusan MK.pdf'; // Sesuaikan dengan path file PDF kamu
    // const fileName = 'Kawal Keputusan MK.pdf'; // Nama file saat diunduh
  
    return response.download(filePath);
  });
    