var tanggal = 10;
var bulan = 4;
var tahun = 1995;

switch
    (bulan) {
    case 1:
    {
    bulan = ' januari '
    break;
    }

    case 2:
    {
    bulan = ' februari '
    break;
    }

    case 3:
    {
    bulan = ' maret '
    break;
    }

    case 4:
    {
    bulan = ' april '
    break;
    }

    case 5:
    {
    bulan = ' mei '
    break;
    }

    case 6:
    {
    bulan = ' juni '
    break;
    }

    case 7:
    {
    bulan = ' juli '
    break;
    }

    case 8:
    {
    bulan = ' Agustus '
    break;
    }

    case 9:
    {
    bulan = ' september '
    break;
    }

    case 10:
    {
    bulan = ' oktober ';
    break;
    }

    case 11:
    {
    bulan = ' november '
    break;
    }

    case 12:
    {
    bulan = ' desember '
    break;
    }

    default:
    {
    console.log('tidak ada bulan lebih dari 12!');
    break;
    }
}
console.log(tanggal + bulan + tahun);