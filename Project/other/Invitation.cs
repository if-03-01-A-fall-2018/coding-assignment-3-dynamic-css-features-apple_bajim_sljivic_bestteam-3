using System;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;

namespace Invitation
{
	public class Invitation
	{
		/// <summary>
		/// Einzuladende Person
		/// </summary>
	    struct iPad
		{
		    public string model;
			public int year;
            public string internalStorage;
            public string cpu;
            public string ram;
            public string display;
            public string wifi;
		}
        struct AppleWatch{
            public string model;
			public int year;
            public string internalStorage;
            public string cpu;
            public string ram;
            public string wifi;
            public string variations;
        }
        struct AppleTV{
            public string model;
			public int year;
            public string cpu;
            public string internalStorage;  
            public string color;        
            public string ram;            
        }
		private static void Main(string[] args)
		{
            iPad[] iPads = new iPad[21]; // Zu erzeugende Liste
            AppleTV[] appletv = new AppleTV[6];
            AppleWatch[] applewatch = new AppleWatch[6];
            Console.WindowWidth = 120;
            iPads = ReadListiPad("iPad"); 
            WriteListiPad(iPads);

            appletv = ReadListAppleTV("AppleTV");
            WriteListAppleTV(appletv);   
            applewatch = ReadListAppleWatch("AppleWatch");
            WriteListAppleWatch(applewatch);          
			Console.ReadLine();

		}
		private static void WriteListiPad(iPad[] iPads)
		{
            string text="";
			if (iPads != null)
			{

                for(int i = 0; i < iPads.Length; i++)
                {
                    Console.WriteLine($""model": "{iPads[i].model}",");
                    Console.WriteLine($""release": "{iPads[i].year}",");
                    Console.WriteLine($""internalStorage": "{iPads[i].internalStorage}",");
                    Console.WriteLine($""cpu": "{iPads[i].cpu}",");
                    Console.WriteLine($""ram": "{iPads[i].ram}",");
                    Console.WriteLine($""display": "{iPads[i].display}",");
                    Console.WriteLine($""wifi": "{iPads[i].wifi}",");
                    
                }           
			}
		}
		static iPad[] ReadListiPad(string fileName)
		{
			iPad[] newList=null;
            fileName = fileName + ".csv";
            if (File.Exists(fileName))  // Pr�fen ob Datei vorhanden
            {
                string[] lines = File.ReadAllLines(fileName, Encoding.Default);
                newList = new iPad[lines.Length];  // Zielliste erzeugen
                for (int i = 0; i < lines.Length; i++)
                {
                    string line = lines[i];
                    // Zeile aufsplitten und in Struktur �bertragen
                    string[] columns = line.Split(';');
                    newList[i].model = columns[0];
                    newList[i].year = Convert.ToInt32(columns[1]);
                    newList[i].internalStorage = columns[2];
                    newList[i].cpu = columns[3];
                    newList[i].ram = columns[4];
                    newList[i].display=columns[5];
                    newList[i].wifi = columns[6];
                }
            }
            else
            {
                Console.WriteLine("Datei " + fileName + " nicht gefunden!");
            }

			return newList;
		}

    	private static void WriteListAppleTV(AppleTV[] TVS)
		{
            string text="";
			if (TVS != null)
			{

                for(int i = 0; i < TVS.Length; i++)
                {
                    Console.WriteLine($""model": "{TVS[i].model}",");
                    Console.WriteLine($""release": "{TVS[i].year}",");
                    Console.WriteLine($""cpu": "{TVS[i].cpu}",");
                    Console.WriteLine($""internalStorage": "{TVS[i].internalStorage}","); 
                    Console.WriteLine($""color": "{TVS[i].color}",");                
                    Console.WriteLine($""ram": "{TVS[i].ram}",");                    
                }           
			}
		}
		static AppleTV[] ReadListAppleTV(string fileName)
		{
			AppleTV[] newList=null;
            fileName = fileName + ".csv";
            if (File.Exists(fileName)) 
            {
                string[] lines = File.ReadAllLines(fileName, Encoding.Default);
                newList = new AppleTV[lines.Length];  // Zielliste erzeugen
                for (int i = 0; i < lines.Length; i++)
                {
                    string line = lines[i];
                    // Zeile aufsplitten und in Struktur �bertragen
                    string[] columns = line.Split(';');
                    newList[i].model = columns[0];
                    newList[i].year = Convert.ToInt32(columns[1]);
                    newList[i].cpu = columns[2];
                    newList[i].internalStorage = columns[3];
                    newList[i].color=columns[4];
                    newList[i].ram = columns[5];
                    
                }
            }
            else
            {
                Console.WriteLine("Datei " + fileName + " nicht gefunden!");
            }

			return newList;
    	}

        private static void WriteListAppleWatch(AppleWatch[] W)
		{
            string text="";
			if (W != null)
			{

                for(int i = 0; i < W.Length; i++)
                {
                    Console.WriteLine($""model": "{W[i].model}",");
                    Console.WriteLine($""release": "{W[i].year}",");
                    Console.WriteLine($""internalStorage": "{W[i].internalStorage}","); 
                    Console.WriteLine($""cpu": "{W[i].cpu}",");
                    Console.WriteLine($""ram": "{W[i].ram}",");   
                    Console.WriteLine($""wifi": "{W[i].wifi}",");                
                    Console.WriteLine($""variations": "{W[i].variations}",");                    
                }           
			}
		}
		static AppleWatch[] ReadListAppleWatch(string fileName)
		{
			AppleWatch[] newList=null;
            fileName = fileName + ".csv";
            if (File.Exists(fileName)) 
            {
                string[] lines = File.ReadAllLines(fileName, Encoding.Default);
                newList = new AppleWatch[lines.Length];  // Zielliste erzeugen
                for (int i = 0; i < lines.Length; i++)
                {
                    string line = lines[i];
                    // Zeile aufsplitten und in Struktur �bertragen
                    string[] columns = line.Split(';');
                    newList[i].model = columns[0];
                    newList[i].year = Convert.ToInt32(columns[1]);
                    newList[i].internalStorage = columns[2];
                    newList[i].cpu = columns[3];
                    newList[i].ram = columns[4];
                    newList[i].wifi=columns[5];
                    newList[i].variations = columns[6];
                    
                    
                }
            }
            else
            {
                Console.WriteLine("Datei " + fileName + " nicht gefunden!");
            }

			return newList;
    	}
    }
}
