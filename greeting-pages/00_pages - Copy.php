<?php 
	require_once(__DIR__ . '/vendor/autoload.php');
	use PhpOffice\PhpSpreadsheet\Spreadsheet; 
	use PhpOffice\PhpSpreadsheet\Writer\Xlsx; 

	$url = "http://localhost/CheekyWP/wp-content/themes/crypdonate";
	if( isset($_POST['_31']) && !empty($_POST['_31']) ){
		//getting saved data from local storage.
		$_01 = $_POST['_01'];
		$_02 = $_POST['_02'];
		$_04 = $_POST['_04'];
		$_06 = $_POST['_06'];
		$_11 = $_POST['_11'];
		$_12 = $_POST['_12'];
		$_13 = $_POST['_13'];
		$_15_1 = $_POST['_15_1'];
		$_15_2 = $_POST['_15_2'];
		$_16 = $_POST['_16'];
		$_17_1 = $_POST['_17_1'];
		$_17_2 = $_POST['_17_2'];
		$_18_1 = $_POST['_18_1'];
		$_18_2 = $_POST['_18_2'];
		$_19 = $_POST['_19'];
		$_20 = $_POST['_20'];
		$_21 = $_POST['_21'];
		$_22 = $_POST['_22'];
		$_24 = $_POST['_24'];
		$_25 = $_POST['_25'];
		$_31 = $_POST['_31'];

		//save the data into the excel file.

		// require_once(__DIR__ . '/vendor/autoload.php');
		// use PhpOffice\PhpSpreadsheet\Spreadsheet; 
		// use PhpOffice\PhpSpreadsheet\Writer\Xlsx; 

		$filename = "statistics/".date('M Y').".xlsx";
		$cur_date = date("d");
		if(file_exists($filename)){


			// // $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
			// $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($filename);
			// $cur_sheet = $spreadsheet->getSheetByName((string)$cur_date);
			// $row = count($cur_sheet->toArray());
			// //save data
			// $cur_sheet->setCellValueByColumnAndRow(1,$row+1,$_01);
			// $cur_sheet->setCellValueByColumnAndRow(2,$row+1,$_02);
			// $cur_sheet->setCellValueByColumnAndRow(3,$row+1,$_04);
			// $cur_sheet->setCellValueByColumnAndRow(4,$row+1,$_06);
			// $cur_sheet->setCellValueByColumnAndRow(5,$row+1,$_11);
			// $cur_sheet->setCellValueByColumnAndRow(6,$row+1,$_12);
			// $cur_sheet->setCellValueByColumnAndRow(7,$row+1,$_13);
			// $cur_sheet->setCellValueByColumnAndRow(8,$row+1,$_15_1);
			// $cur_sheet->setCellValueByColumnAndRow(9,$row+1,$_15_2);
			// $cur_sheet->setCellValueByColumnAndRow(10,$row+1,$_16);
			// $cur_sheet->setCellValueByColumnAndRow(11,$row+1,$_17_1);
			// $cur_sheet->setCellValueByColumnAndRow(12,$row+1,$_17_2);
			// $cur_sheet->setCellValueByColumnAndRow(13,$row+1,$_18_1);
			// $cur_sheet->setCellValueByColumnAndRow(14,$row+1,$_18_2);
			// $cur_sheet->setCellValueByColumnAndRow(15,$row+1,$_19);
			// $cur_sheet->setCellValueByColumnAndRow(16,$row+1,$_20);
			// $cur_sheet->setCellValueByColumnAndRow(17,$row+1,$_21);
			// $cur_sheet->setCellValueByColumnAndRow(18,$row+1,$_22);
			// $cur_sheet->setCellValueByColumnAndRow(19,$row+1,$_24);
			// $cur_sheet->setCellValueByColumnAndRow(20,$row+1,$_25);
			// $cur_sheet->setCellValueByColumnAndRow(21,$row+1,$_31);
			// $cur_sheet->setCellValueByColumnAndRow(22,$row+1,False);

			// //write it again to Filesystem with the same name (=replace)
			// $writer = new Xlsx($spreadsheet);
			// $writer->save($filename);
		
		}else{
			// If the file doesn't exist, a brand new file for current month is created
			$mySpreadsheet = new PhpOffice\PhpSpreadsheet\Spreadsheet();
			// delete the default active sheet
			$mySpreadsheet->removeSheetByIndex(0);
			//define header data
			$column_header=["01-contentstart","02-specialty","04-clientsnow","06-clientsafter","11-brandname","12-contentsell", "13-industry","15-sell-product-description","15-sell-product-title","16-cost-low-high","17-company-sell","17-com-special-offer","18_strengths","18-company-strengths","19-way","20-regions-txt","21_gender",
				"22_age","24-target","25-interests","31-email","32-payment"];
			// Create the sheets for everyday
			for($i = 0 ; $i < 31 ; $i++){		
				if($i < 9)
					$sheet_temp = new \PhpOffice\PhpSpreadsheet\Worksheet\Worksheet($mySpreadsheet, "0".(string)($i+1));
				else
					$sheet_temp = new \PhpOffice\PhpSpreadsheet\Worksheet\Worksheet($mySpreadsheet, (string)($i+1));
				
				$mySpreadsheet->addSheet($sheet_temp, $i);
				//add header titles for every sheet
				$j=1;
				foreach($column_header as $x_value) {
					$sheet_temp->setCellValueByColumnAndRow($j,1,$x_value);
		  			$j=$j+1;  		
				}
				foreach ($sheet_temp->getColumnIterator() as $column)
			    {
			        $sheet_temp->getColumnDimension($column->getColumnIndex())->setAutoSize(true);
			    }

			}
			$cur_sheet = $mySpreadsheet->getSheetByName((string)$cur_date);
			//save data as first record
			$cur_sheet->setCellValueByColumnAndRow(1,2,$_01);
			$cur_sheet->setCellValueByColumnAndRow(2,2,$_02);
			$cur_sheet->setCellValueByColumnAndRow(3,2,$_04);
			$cur_sheet->setCellValueByColumnAndRow(4,2,$_06);
			$cur_sheet->setCellValueByColumnAndRow(5,2,$_11);
			$cur_sheet->setCellValueByColumnAndRow(6,2,$_12);
			$cur_sheet->setCellValueByColumnAndRow(7,2,$_13);
			$cur_sheet->setCellValueByColumnAndRow(8,2,$_15_1);
			$cur_sheet->setCellValueByColumnAndRow(9,2,$_15_2);
			$cur_sheet->setCellValueByColumnAndRow(10,2,$_16);
			$cur_sheet->setCellValueByColumnAndRow(11,2,$_17_1);
			$cur_sheet->setCellValueByColumnAndRow(12,2,$_17_2);
			$cur_sheet->setCellValueByColumnAndRow(13,2,$_18_1);
			$cur_sheet->setCellValueByColumnAndRow(14,2,$_18_2);
			$cur_sheet->setCellValueByColumnAndRow(15,2,$_19);
			$cur_sheet->setCellValueByColumnAndRow(16,2,$_20);
			$cur_sheet->setCellValueByColumnAndRow(17,2,$_21);
			$cur_sheet->setCellValueByColumnAndRow(18,2,$_22);
			$cur_sheet->setCellValueByColumnAndRow(19,2,$_24);
			$cur_sheet->setCellValueByColumnAndRow(20,2,$_25);
			$cur_sheet->setCellValueByColumnAndRow(21,2,$_31);
			$cur_sheet->setCellValueByColumnAndRow(22,2,False);
			// Save to file.
			$writer = new PhpOffice\PhpSpreadsheet\Writer\Xlsx($mySpreadsheet);
			$writer->save($filename);
		
		}

		echo "OK";
	
	} else {
		echo "Failure";
	}
	die();
?>

// 01-contentstart Sales   
// 02-specialty    month   
// 04-clientsnow   50-100  
// 06-clientsafter 25-50   
// 11-brandname    fedex   
// 12-contentsell  products    
// 13-industry Design&Renovation,Sports&Fitness    
// 15-sell-product-description receiver    
// 15-sell-product-title   computer    
// 16-cost-low-high    200 
// 17-company-sell discounted-purcase,gift-with-purchase,install-payment   
// 18_strengths    In-house-production,Fast-shipping   
// 19-way  products,services   
// 20-regions-txt  London  
// 21_gender   Man,Woman   
// 22_age  25-35,18-25 
// 24-target   OK  
// 25-interests    Sports-Fitness,Technology   
// 31-email    coindevmentor9211@gmail.com