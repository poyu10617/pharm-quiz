/*
  藥學國考共同提示資料庫 v9
  - drugFacts：特定藥物個論，以小寫 generic name 為 key。
  - classRules：分類共通資訊；chapters 限定章節，match 可為 any 或 all。
  - 請避免只用「第一代」「第二代」「其他」等泛用詞而沒有章節限制。
*/
window.PHARM_SHARED_NOTES = {
  "version": "2026-06-20-v9",
  "description": "共同國考個論與藥化速記。classRules 以章節與分類路徑比對；drugFacts 以藥名精確比對。",
  "drugFacts": {
    "nimodipine": [
      [
        "用途",
        "偏腦血管選擇性的 1,4-dihydropyridine；用於近期蛛網膜下腔出血後，降低血管痙攣造成的缺血性神經缺損。"
      ],
      [
        "注意",
        "口服使用；不可將口服製劑內容物以靜脈注射。主要不良反應為低血壓。"
      ]
    ],
    "warfarin": [
      [
        "PK/藥化",
        "R/S racemate；較強效的 S-warfarin 主要由 CYP2C9 代謝，R-warfarin 主要由 CYP1A2 與 CYP3A4 代謝。"
      ],
      [
        "機轉",
        "抑制 VKORC1，降低 factors II、VII、IX、X 與 protein C/S 的活化。"
      ],
      [
        "監測/逆轉",
        "以 PT/INR 監測；嚴重出血常用 vitamin K 加 4-factor PCC。起始時 protein C 下降較快，可有 skin necrosis。"
      ]
    ],
    "acetazolamide": [
      [
        "個論",
        "造成 bicarbonaturia、尿液鹼化與高氯性正常陰離子間隙代謝性酸中毒。"
      ],
      [
        "用途",
        "青光眼、高山症、特發性顱內高壓；也可矯正代謝性鹼中毒。"
      ]
    ],
    "furosemide": [
      [
        "酸鹼/電解質",
        "典型：低血鉀、低血鎂、低血鈣與低氯性代謝性鹼中毒。"
      ],
      [
        "個論",
        "NKCC2 inhibitor；耳毒性、高尿酸。與 aminoglycoside 合用耳毒性風險增加。"
      ],
      [
        "藥化",
        "anthranilic acid/sulfonamide derivative。"
      ]
    ],
    "ethacrynic acid": [
      [
        "藥化",
        "非 sulfonamide 的 loop diuretic；phenoxyacetic acid derivative。"
      ],
      [
        "ADR",
        "耳毒性較突出，可用於嚴重 sulfonamide allergy 考題情境。"
      ]
    ],
    "hydrochlorothiazide": [
      [
        "酸鹼/電解質",
        "低血鉀、低血鈉、低血鎂與 hypochloremic metabolic alkalosis；增加 Ca²⁺ 再吸收。"
      ],
      [
        "藥化",
        "benzothiadiazine sulfonamide derivative。"
      ]
    ],
    "chlorthalidone": [
      [
        "個論",
        "thiazide-like、作用時間較長；同樣可造成低血鉀代謝性鹼中毒與高尿酸。"
      ]
    ],
    "spironolactone": [
      [
        "酸鹼/電解質",
        "保鉀型利尿劑：高血鉀與代謝性酸中毒。"
      ],
      [
        "內分泌 ADR",
        "具 antiandrogen/progesterone receptor 作用，可造成 gynecomastia、性功能障礙與月經異常。"
      ]
    ],
    "eplerenone": [
      [
        "個論",
        "較選擇性的 mineralocorticoid receptor antagonist，較少 gynecomastia；仍會高血鉀。"
      ]
    ],
    "amiloride": [
      [
        "酸鹼/電解質",
        "ENaC blocker；可造成高血鉀與代謝性酸中毒。"
      ],
      [
        "用途",
        "Liddle syndrome 與 lithium-induced nephrogenic diabetes insipidus。"
      ]
    ],
    "mannitol": [
      [
        "用途",
        "降低顱內壓/眼壓並維持尿流。"
      ],
      [
        "注意",
        "初期擴張 extracellular volume，可能惡化 pulmonary edema/heart failure；無尿者避免。"
      ]
    ],
    "digoxin": [
      [
        "機轉",
        "抑制 Na⁺/K⁺-ATPase 增加 intracellular Ca²⁺；增加 vagal tone、減慢 AV conduction。"
      ],
      [
        "毒性",
        "噁心、黃綠視覺與幾乎任何心律不整；低 K⁺、低 Mg²⁺、高 Ca²⁺ 增加毒性。"
      ],
      [
        "解毒",
        "digoxin immune Fab。"
      ]
    ],
    "adenosine": [
      [
        "用途",
        "極短效 AV nodal blocker，常用於終止 AVNRT/規則窄 QRS SVT。"
      ],
      [
        "交互作用",
        "caffeine/theophylline antagonize；dipyridamole potentiates。可有 flushing、胸悶與短暫 AV block。"
      ]
    ],
    "amiodarone": [
      [
        "個論",
        "多通道阻斷、半衰期極長；抑制 CYP/P-gp，可提高 warfarin/digoxin 濃度。"
      ],
      [
        "ADR",
        "肺纖維化、甲狀腺異常、肝毒性、角膜沉積、藍灰皮膚與心搏過慢；torsades 相對較少。"
      ]
    ],
    "sotalol": [
      [
        "個論",
        "非選擇性 β blocker 加 Class III K⁺ channel blocker；腎排除。"
      ],
      [
        "ADR",
        "QT prolongation 與 torsades de pointes。"
      ]
    ],
    "procainamide": [
      [
        "ADR",
        "drug-induced lupus、QT prolongation/torsades；代謝物 NAPA 具 Class III 活性。"
      ]
    ],
    "quinidine": [
      [
        "ADR/交互作用",
        "cinchonism、QT prolongation/torsades；抑制 P-gp 可增加 digoxin 濃度。"
      ]
    ],
    "lidocaine": [
      [
        "個論",
        "Class IB antiarrhythmic；偏好缺血/去極化心室組織，也為 amide local anesthetic。"
      ],
      [
        "PK",
        "高 hepatic extraction，嚴重肝病或低心輸出時清除下降。"
      ]
    ],
    "flecainide": [
      [
        "注意",
        "Class IC；顯著 QRS widening。心肌梗塞後或結構性心臟病避免，因 proarrhythmia。"
      ]
    ],
    "verapamil": [
      [
        "個論",
        "non-DHP CCB，抑制 AV node；常考便祕、bradycardia/heart block。"
      ],
      [
        "交互作用",
        "P-gp/CYP3A4 inhibitor，可增加 digoxin 等藥物暴露。"
      ]
    ],
    "nifedipine": [
      [
        "個論",
        "DHP CCB；血管擴張為主，短效製劑較易反射性心搏過速。"
      ]
    ],
    "hydralazine": [
      [
        "ADR",
        "反射性心搏過速、水鈉滯留與 drug-induced lupus；常與 nitrate 用於特定 HFrEF。"
      ]
    ],
    "minoxidil": [
      [
        "機轉/ADR",
        "開啟 KATP channel 的強效小動脈擴張劑；hypertrichosis、反射性心搏過速與 fluid retention。"
      ]
    ],
    "clonidine": [
      [
        "個論",
        "中樞 α₂ agonist；口乾、鎮靜。突然停藥可造成 rebound hypertension。"
      ]
    ],
    "methyldopa": [
      [
        "個論",
        "中樞 α₂ agonist，妊娠高血壓經典藥；可 Coombs-positive hemolytic anemia 與肝毒性。"
      ]
    ],
    "sodium nitroprusside": [
      [
        "個論",
        "快速釋放 NO、動靜脈皆擴張；高劑量/長時間可 cyanide 或 thiocyanate toxicity。"
      ]
    ],
    "nitroglycerin": [
      [
        "個論",
        "主要 venodilation 降低 preload；頭痛、低血壓、反射性心搏過速與 tolerance。"
      ],
      [
        "禁忌",
        "與 sildenafil/tadalafil 等 PDE5 inhibitor 併用可嚴重低血壓。"
      ]
    ],
    "atorvastatin": [
      [
        "PK",
        "CYP3A4 substrate；強 CYP3A4 inhibitor 或 grapefruit 可增加肌病風險。"
      ]
    ],
    "simvastatin": [
      [
        "PK",
        "lactone prodrug、CYP3A4 substrate；交互作用與 myopathy 風險常考。"
      ]
    ],
    "rosuvastatin": [
      [
        "PK",
        "較少 CYP3A4 代謝；高強度 statin 代表之一。"
      ]
    ],
    "gemfibrozil": [
      [
        "交互作用",
        "抑制 statin glucuronidation/transport，合併使用顯著增加 myopathy/rhabdomyolysis。"
      ]
    ],
    "niacin": [
      [
        "ADR",
        "flushing（可 aspirin 預處理）、高尿酸、高血糖與肝毒性。"
      ]
    ],
    "vancomycin": [
      [
        "機轉",
        "結合 D-Ala-D-Ala、抑制 cell-wall synthesis。"
      ],
      [
        "ADR",
        "nephrotoxicity、infusion reaction（red-man）；口服用於 C. difficile，systemic infection 需 IV。"
      ]
    ],
    "gentamicin": [
      [
        "個論",
        "aminoglycoside；concentration-dependent killing、post-antibiotic effect。"
      ],
      [
        "ADR",
        "nephrotoxicity、ototoxicity、neuromuscular blockade；對 anaerobe 無效。"
      ]
    ],
    "daptomycin": [
      [
        "機轉/ADR",
        "使 gram-positive cell membrane depolarization；監測 CPK/肌病。"
      ],
      [
        "限制",
        "被 pulmonary surfactant inactivate，不用於 pneumonia。"
      ]
    ],
    "linezolid": [
      [
        "個論",
        "oxazolidinone，阻止 50S initiation complex；口服生體可用率高。"
      ],
      [
        "ADR",
        "thrombocytopenia、optic/peripheral neuropathy；弱 MAOI，可 serotonin syndrome。"
      ]
    ],
    "chloramphenicol": [
      [
        "ADR",
        "dose-related marrow suppression、idiosyncratic aplastic anemia、gray baby syndrome。"
      ]
    ],
    "clindamycin": [
      [
        "個論",
        "50S inhibitor，對 anaerobe/gram-positive 有效；C. difficile colitis 高頻。"
      ]
    ],
    "rifampin": [
      [
        "PK",
        "強 CYP/P-gp inducer，降低 oral contraceptive、warfarin 等濃度。"
      ],
      [
        "ADR",
        "橘紅色體液、肝毒性；抑制 bacterial DNA-dependent RNA polymerase。"
      ]
    ],
    "isoniazid": [
      [
        "機轉",
        "抑制 mycolic acid synthesis；由 NAT2 acetylation。"
      ],
      [
        "ADR",
        "周邊神經病變（pyridoxine 預防）、肝炎、sideroblastic anemia。"
      ]
    ],
    "pyrazinamide": [
      [
        "ADR",
        "hyperuricemia 與 hepatotoxicity；在酸性 phagolysosome 活性佳。"
      ]
    ],
    "ethambutol": [
      [
        "ADR",
        "optic neuritis、紅綠色盲；抑制 arabinosyl transferase。"
      ]
    ],
    "metronidazole": [
      [
        "個論",
        "在 anaerobe/protozoa 還原後形成自由基破壞 DNA。"
      ],
      [
        "ADR",
        "金屬味、周邊神經病變；考試常連結 disulfiram-like alcohol reaction。"
      ]
    ],
    "nitrofurantoin": [
      [
        "用途/ADR",
        "下泌尿道感染；尿中濃度高。長期可肺毒性，G6PD deficiency 可溶血。"
      ]
    ],
    "fosfomycin": [
      [
        "機轉",
        "抑制 MurA、阻斷 peptidoglycan synthesis 早期步驟；常用單次口服治 uncomplicated cystitis。"
      ]
    ],
    "amphotericin b": [
      [
        "ADR",
        "nephrotoxicity、低 K⁺/低 Mg²⁺、infusion reaction；liposomal formulation 較少腎毒性。"
      ]
    ],
    "flucytosine": [
      [
        "機轉/ADR",
        "真菌內轉為 5-FU、抑制 DNA/RNA；易產生 resistance，常與 amphotericin B 合用。骨髓抑制。"
      ]
    ],
    "terbinafine": [
      [
        "機轉",
        "抑制 squalene epoxidase；治 dermatophyte/onychomycosis。"
      ],
      [
        "ADR",
        "肝毒性與味覺異常。"
      ]
    ],
    "methotrexate": [
      [
        "機轉",
        "抑制 DHFR；高劑量以 leucovorin rescue。"
      ],
      [
        "毒性",
        "骨髓抑制、mucositis、hepatotoxicity、pneumonitis；腎排泄與尿液 pH 影響清除。"
      ]
    ],
    "fluorouracil": [
      [
        "機轉",
        "轉為 FdUMP 抑制 thymidylate synthase；leucovorin 增強結合。"
      ],
      [
        "ADR",
        "myelosuppression、mucositis、hand-foot syndrome；DPD deficiency 可嚴重毒性。"
      ]
    ],
    "capecitabine": [
      [
        "藥化/PK",
        "oral prodrug，於腫瘤較多轉為 5-FU；可增強 warfarin/CYP2C9 substrate 效應。"
      ],
      [
        "ADR",
        "hand-foot syndrome、diarrhea。"
      ]
    ],
    "cytarabine": [
      [
        "個論",
        "pyrimidine analog、S-phase；高劑量 cerebellar toxicity 與 conjunctivitis。"
      ]
    ],
    "vincristine": [
      [
        "ADR",
        "peripheral neuropathy、ileus、SIADH；骨髓抑制較 vinblastine 少。絕不可 intrathecal。"
      ]
    ],
    "bleomycin": [
      [
        "個論",
        "G2-specific DNA strand breaks；pulmonary fibrosis、skin changes，骨髓抑制較少。"
      ]
    ],
    "doxorubicin": [
      [
        "ADR",
        "dose-dependent cardiomyopathy；dexrazoxane 可保護。另有 vesicant tissue injury。"
      ]
    ],
    "cyclophosphamide": [
      [
        "ADR",
        "hemorrhagic cystitis（acrolein）；MESNA 與 hydration 預防。"
      ]
    ],
    "cisplatin": [
      [
        "ADR",
        "nephrotoxicity、ototoxicity、peripheral neuropathy、嚴重 emesis；amifostine 可減腎毒性。"
      ]
    ],
    "imatinib": [
      [
        "個論",
        "BCR-ABL TKI，也抑制 c-KIT/PDGFR；CML 與 GIST 經典藥。"
      ]
    ],
    "trastuzumab": [
      [
        "機轉/ADR",
        "anti-HER2 monoclonal antibody；cardiomyopathy（通常非累積、可逆）與 infusion reaction。"
      ]
    ],
    "rituximab": [
      [
        "機轉/ADR",
        "anti-CD20；infusion reaction、HBV reactivation 與 rare PML。"
      ]
    ],
    "bevacizumab": [
      [
        "機轉/ADR",
        "anti-VEGF-A；高血壓、蛋白尿、出血/血栓、GI perforation 與傷口癒合不良。"
      ]
    ],
    "bortezomib": [
      [
        "ADR",
        "peripheral neuropathy、thrombocytopenia、herpes zoster reactivation；需抗病毒預防常考。"
      ]
    ],
    "tamoxifen": [
      [
        "藥理",
        "breast ER antagonist、bone/endometrium partial agonist。"
      ],
      [
        "ADR",
        "endometrial cancer、VTE 與 hot flashes；CYP2D6 形成活性代謝物。"
      ]
    ],
    "raloxifene": [
      [
        "個論",
        "bone ER agonist、breast/endometrium antagonist；不增加 endometrial cancer，但仍增加 VTE。"
      ]
    ],
    "flutamide": [
      [
        "藥化/藥理",
        "第一代 nonsteroidal antiandrogen（anilide 類）；阻斷 androgen receptor。"
      ],
      [
        "ADR",
        "gynecomastia、性慾/勃起功能下降與肝毒性。"
      ]
    ],
    "finasteride": [
      [
        "機轉",
        "主要抑制 type II 5α-reductase，降低 DHT；縮小 prostate、亦用於 androgenic alopecia。"
      ]
    ],
    "levothyroxine": [
      [
        "PK",
        "T4 補充；空腹服用，與 iron/calcium 分開。半衰期長，以 TSH 調整。"
      ]
    ],
    "propylthiouracil": [
      [
        "個論",
        "抑制 thyroid peroxidase，並抑制周邊 T4→T3；首孕期/thyroid storm 常考。"
      ],
      [
        "ADR",
        "嚴重 hepatotoxicity、agranulocytosis。"
      ]
    ],
    "methimazole": [
      [
        "個論",
        "抑制 thyroid peroxidase；除首孕期與 thyroid storm 外通常優先於 PTU。"
      ],
      [
        "ADR",
        "agranulocytosis；首孕期 teratogenicity。"
      ]
    ],
    "metformin": [
      [
        "個論",
        "不刺激 insulin secretion，單用低血糖少；可降低體重或體重中性。"
      ],
      [
        "ADR",
        "GI、B12 deficiency；嚴重腎功能不全/缺氧情境注意 lactic acidosis。"
      ]
    ],
    "pioglitazone": [
      [
        "ADR",
        "fluid retention/heart failure、weight gain、fracture；改善 insulin sensitivity。"
      ]
    ],
    "semaglutide": [
      [
        "個論",
        "GLP-1 receptor agonist；促進 glucose-dependent insulin、減少食慾與延緩胃排空。"
      ],
      [
        "ADR",
        "GI 不適、膽囊疾病；有 medullary thyroid carcinoma 警語。"
      ]
    ],
    "dapagliflozin": [
      [
        "個論",
        "SGLT2 inhibitor；除降糖外有 HFrEF/CKD 心腎效益。"
      ],
      [
        "ADR",
        "genital mycotic infection、volume depletion、euglycemic DKA。"
      ]
    ],
    "insulin glargine": [
      [
        "藥化/PK",
        "長效 insulin analog，在皮下形成 microprecipitate；通常無明顯 peak，不與其他 insulin 混合。"
      ]
    ],
    "regular insulin": [
      [
        "個論",
        "短效 human insulin；可 IV 用於 DKA 與 hyperkalemia（促 K⁺ 進細胞）。"
      ]
    ],
    "acetaminophen": [
      [
        "毒性",
        "過量產生 NAPQI、耗竭 glutathione，造成 centrilobular hepatic necrosis。"
      ],
      [
        "解毒",
        "N-acetylcysteine。"
      ]
    ],
    "aspirin": [
      [
        "個論",
        "不可逆 acetylate platelet COX-1；低劑量抗血小板。"
      ],
      [
        "毒性",
        "早期 respiratory alkalosis，後期 mixed high-anion-gap metabolic acidosis；耳鳴。"
      ]
    ],
    "colchicine": [
      [
        "機轉/ADR",
        "結合 tubulin、抑制 microtubule polymerization 與 neutrophil migration；diarrhea、myopathy、bone marrow suppression。"
      ]
    ],
    "allopurinol": [
      [
        "機轉/交互作用",
        "xanthine oxidase inhibitor；會增加 azathioprine/6-MP 濃度，需大幅減量。"
      ],
      [
        "ADR",
        "嚴重 hypersensitivity/SJS，HLA-B*58:01 相關。"
      ]
    ],
    "cimetidine": [
      [
        "個論",
        "H2 blocker；CYP inhibitor、antiandrogen effect、gynecomastia，並抑制 creatinine tubular secretion。"
      ]
    ],
    "omeprazole": [
      [
        "PK",
        "PPI prodrug，在酸性 canaliculus 活化；抑制 CYP2C19，可能降低 clopidogrel activation。"
      ]
    ],
    "metoclopramide": [
      [
        "機轉/ADR",
        "D2 antagonist、5-HT4 agonist；促胃排空。EPS、tardive dyskinesia、hyperprolactinemia。"
      ]
    ],
    "ondansetron": [
      [
        "個論",
        "5-HT3 antagonist；QT prolongation、constipation、headache。"
      ]
    ],
    "naloxone": [
      [
        "個論",
        "短效 opioid antagonist；可能需重複給藥，並可誘發 acute withdrawal。"
      ]
    ],
    "naltrexone": [
      [
        "個論",
        "長效 opioid antagonist；用於 OUD/AUD。使用前需無 opioid，且注意 hepatotoxicity。"
      ]
    ],
    "methadone": [
      [
        "個論",
        "長效 μ agonist 兼 NMDA antagonism；QT prolongation、累積性呼吸抑制。"
      ]
    ],
    "tramadol": [
      [
        "個論",
        "弱 μ agonist 加 5-HT/NE reuptake inhibition；seizure 與 serotonin syndrome。"
      ]
    ],
    "meperidine": [
      [
        "毒性",
        "代謝物 normeperidine 可致 tremor/seizure；與 MAOI 可嚴重反應。"
      ]
    ],
    "clozapine": [
      [
        "ADR",
        "agranulocytosis、myocarditis、seizure、sialorrhea、嚴重便祕與代謝症候群；需 ANC monitoring。"
      ]
    ],
    "haloperidol": [
      [
        "ADR",
        "高效價 D2 antagonist：EPS、hyperprolactinemia、NMS 與 QT prolongation。"
      ]
    ],
    "phenytoin": [
      [
        "PK",
        "capacity-limited/zero-order kinetics、high protein binding、CYP inducer。"
      ],
      [
        "ADR",
        "gingival hyperplasia、hirsutism、megaloblastic anemia、osteopenia、teratogenicity。"
      ]
    ],
    "carbamazepine": [
      [
        "PK/ADR",
        "CYP autoinduction；diplopia/ataxia、hyponatremia、agranulocytosis/aplastic anemia。"
      ],
      [
        "藥化",
        "dibenzazepine derivative；HLA-B*15:02 與 SJS/TEN 相關。"
      ]
    ],
    "valproate": [
      [
        "ADR",
        "hepatotoxicity、pancreatitis、weight gain、thrombocytopenia、hyperammonemia；高度 teratogenic。"
      ]
    ],
    "lamotrigine": [
      [
        "ADR",
        "rash/SJS；需慢慢 titrate，valproate 會降低其代謝而需減量。"
      ]
    ],
    "topiramate": [
      [
        "個論",
        "多機轉；weight loss、cognitive slowing、kidney stones 與 carbonic anhydrase inhibition 造成 metabolic acidosis。"
      ]
    ],
    "ethosuximide": [
      [
        "個論",
        "阻斷 thalamic T-type Ca²⁺ channel；absence seizure 經典。常見 GI 與 fatigue。"
      ]
    ],
    "levetiracetam": [
      [
        "個論",
        "SV2A ligand；交互作用少、腎排除。behavioral change/irritability 常考。"
      ]
    ],
    "levodopa/carbidopa": [
      [
        "個論",
        "carbidopa 不過 BBB，抑制周邊 decarboxylation；降低 nausea/orthostasis、增加腦內 levodopa。"
      ]
    ],
    "selegiline": [
      [
        "個論",
        "低劑量偏 MAO-B；高劑量失去選擇性。amphetamine-like metabolites 可致失眠。"
      ]
    ],
    "entacapone": [
      [
        "個論",
        "周邊 COMT inhibitor；可 orange-brown urine、diarrhea，並加重 levodopa dyskinesia。"
      ]
    ],
    "propofol": [
      [
        "個論",
        "快速 induction/recovery、antiemetic；低血壓、呼吸抑制與 propofol infusion syndrome。"
      ]
    ],
    "ketamine": [
      [
        "個論",
        "NMDA antagonist；dissociative anesthesia、保留 airway reflex、增加 HR/BP。可 emergence reaction。"
      ]
    ],
    "succinylcholine": [
      [
        "個論",
        "depolarizing Nm blocker；被 plasma pseudocholinesterase 分解。"
      ],
      [
        "ADR",
        "hyperkalemia、malignant hyperthermia、bradycardia 與 prolonged apnea。"
      ]
    ],
    "dantrolene": [
      [
        "機轉/用途",
        "阻斷 RyR1、降低 SR Ca²⁺ release；治 malignant hyperthermia 與 NMS/痙縮。"
      ]
    ],
    "zolpidem": [
      [
        "個論",
        "偏 GABA-A α1；催眠但抗焦慮/抗癲癇較弱。可 complex sleep behaviors。"
      ]
    ]
  },
  "classRules": [
    {
      "id": "class_000",
      "chapters": [
        26
      ],
      "match": "any",
      "terms": [
        "carbonic anhydrase inhibitors",
        "cai"
      ],
      "facts": [
        [
          "機轉/酸鹼",
          "近端小管抑制 carbonic anhydrase，增加 HCO₃⁻ 排泄；典型為高氯性、正常陰離子間隙代謝性酸中毒，尿液鹼化。"
        ],
        [
          "用途",
          "常見考點：青光眼、高山症、特發性顱內高壓；利尿作用較弱。"
        ],
        [
          "藥化",
          "多數為 sulfonamide 類 carbonic anhydrase inhibitor。"
        ]
      ]
    },
    {
      "id": "class_001",
      "chapters": [
        26
      ],
      "match": "any",
      "terms": [
        "loop diuretics"
      ],
      "facts": [
        [
          "機轉/酸鹼",
          "抑制亨利氏環粗上行支 NKCC2；常見低血鉀、低血鎂、低血鈣與低氯性代謝性鹼中毒。"
        ],
        [
          "不良反應",
          "高尿酸、耳毒性、體液容積下降；與 aminoglycoside 合用時耳毒性風險更高。"
        ]
      ]
    },
    {
      "id": "class_002",
      "chapters": [
        26
      ],
      "match": "any",
      "terms": [
        "thiazides",
        "thiazide-like"
      ],
      "facts": [
        [
          "機轉/酸鹼",
          "抑制遠曲小管 NCC；常見低血鉀、低血鈉、低血鎂與代謝性鹼中毒，但會增加 Ca²⁺ 再吸收。"
        ],
        [
          "用途/ADR",
          "可用於高血壓與腎性尿崩症；高尿酸、高血糖為常考副作用。"
        ],
        [
          "藥化",
          "典型 thiazide 為 benzothiadiazine sulfonamide 衍生物。"
        ]
      ]
    },
    {
      "id": "class_003",
      "chapters": [
        26
      ],
      "match": "any",
      "terms": [
        "enac blockers",
        "mineralocorticoid receptor antagonists"
      ],
      "facts": [
        [
          "機轉/酸鹼",
          "保鉀型利尿劑降低集尿管 Na⁺ 再吸收與 H⁺/K⁺ 分泌；常見高血鉀與代謝性酸中毒。"
        ]
      ]
    },
    {
      "id": "class_004",
      "chapters": [
        26
      ],
      "match": "any",
      "terms": [
        "osmotic diuretics"
      ],
      "facts": [
        [
          "機轉",
          "提高腎小管液與血漿滲透壓；可降低顱內壓與眼壓。"
        ],
        [
          "禁忌/ADR",
          "可能先擴張細胞外液，心衰竭或肺水腫患者須特別小心。"
        ]
      ]
    },
    {
      "id": "class_005",
      "chapters": [
        27
      ],
      "match": "any",
      "terms": [
        "ace inhibitors"
      ],
      "facts": [
        [
          "機轉",
          "抑制 ACE，降低 angiotensin II 並增加 bradykinin。"
        ],
        [
          "ADR",
          "乾咳、血管性水腫、高血鉀、腎功能惡化；妊娠禁用。"
        ]
      ]
    },
    {
      "id": "class_006",
      "chapters": [
        27
      ],
      "match": "any",
      "terms": [
        "angiotensin receptor blockers"
      ],
      "facts": [
        [
          "機轉",
          "阻斷 AT₁ receptor；不會因 bradykinin 增加而常見乾咳。"
        ],
        [
          "ADR",
          "高血鉀、腎功能惡化；妊娠禁用。"
        ]
      ]
    },
    {
      "id": "class_007",
      "chapters": [
        27
      ],
      "match": "any",
      "terms": [
        "direct renin inhibitor"
      ],
      "facts": [
        [
          "機轉",
          "直接抑制 renin，降低 angiotensin I 生成。"
        ],
        [
          "ADR",
          "高血鉀、低血壓與腎功能惡化；妊娠禁用。"
        ]
      ]
    },
    {
      "id": "class_008",
      "chapters": [
        27
      ],
      "match": "any",
      "terms": [
        "dihydropyridines"
      ],
      "facts": [
        [
          "藥理",
          "1,4-dihydropyridine 類 L-type Ca²⁺ channel blocker，以血管平滑肌作用為主。"
        ],
        [
          "ADR",
          "周邊水腫、潮紅、頭痛、牙齦增生；短效製劑較易反射性心搏過速。"
        ]
      ]
    },
    {
      "id": "class_009",
      "chapters": [
        27
      ],
      "match": "any",
      "terms": [
        "non-dihydropyridines"
      ],
      "facts": [
        [
          "藥理",
          "verapamil/diltiazem 以心臟作用較明顯，可抑制 AV node。"
        ],
        [
          "ADR",
          "心搏過慢、AV block；verapamil 常考便祕。"
        ]
      ]
    },
    {
      "id": "class_010",
      "chapters": [
        27
      ],
      "match": "any",
      "terms": [
        "β blockers",
        "beta blockers"
      ],
      "facts": [
        [
          "藥理",
          "β 阻斷劑可降低心率、收縮力與 renin 釋放。"
        ],
        [
          "注意",
          "突然停藥可造成反彈性心搏過速或心絞痛；非選擇性者可誘發支氣管收縮。"
        ],
        [
          "藥化",
          "多數 β blocker 具有 aryloxypropanolamine 骨架。"
        ]
      ]
    },
    {
      "id": "class_011",
      "chapters": [
        27
      ],
      "match": "any",
      "terms": [
        "α1 blockers",
        "alpha1 blockers"
      ],
      "facts": [
        [
          "ADR",
          "姿勢性低血壓與 first-dose syncope；可改善 BPH 排尿症狀。"
        ]
      ]
    },
    {
      "id": "class_012",
      "chapters": [
        27
      ],
      "match": "any",
      "terms": [
        "α2 agonists",
        "alpha2 agonists"
      ],
      "facts": [
        [
          "機轉",
          "中樞 α₂ agonist 降低交感神經輸出。"
        ],
        [
          "ADR",
          "鎮靜、口乾；clonidine 突然停藥可反彈性高血壓。"
        ]
      ]
    },
    {
      "id": "class_013",
      "chapters": [
        27
      ],
      "match": "any",
      "terms": [
        "arteriolar vasodilators"
      ],
      "facts": [
        [
          "機轉/ADR",
          "直接小動脈擴張，常引起反射性心搏過速與水鈉滯留，通常需合併 β blocker/利尿劑。"
        ]
      ]
    },
    {
      "id": "class_014",
      "chapters": [
        28
      ],
      "match": "any",
      "terms": [
        "nitrates",
        "no donors"
      ],
      "facts": [
        [
          "機轉",
          "轉化為 NO，增加 cGMP；靜脈擴張、降低 preload 為主。"
        ],
        [
          "ADR/交互作用",
          "頭痛、低血壓、耐受性；不可與 PDE5 inhibitor 併用。"
        ]
      ]
    },
    {
      "id": "class_015",
      "chapters": [
        29
      ],
      "match": "any",
      "terms": [
        "ia na+ blocker"
      ],
      "facts": [
        [
          "電生理",
          "Class IA 中度阻斷 Na⁺ 並延長 APD/QT；可造成 torsades de pointes。"
        ]
      ]
    },
    {
      "id": "class_016",
      "chapters": [
        29
      ],
      "match": "any",
      "terms": [
        "ib na+ blocker"
      ],
      "facts": [
        [
          "電生理",
          "Class IB 輕度阻斷 Na⁺，偏好缺血/去極化心室組織；縮短 APD。"
        ]
      ]
    },
    {
      "id": "class_017",
      "chapters": [
        29
      ],
      "match": "any",
      "terms": [
        "ic na+ blocker"
      ],
      "facts": [
        [
          "電生理",
          "Class IC 強力阻斷 Na⁺、顯著減慢傳導；結構性心臟病或心肌梗塞後通常避免。"
        ]
      ]
    },
    {
      "id": "class_018",
      "chapters": [
        29
      ],
      "match": "any",
      "terms": [
        "k+ channel blockers"
      ],
      "facts": [
        [
          "電生理",
          "Class III 延長 repolarization 與 QT；多數具有 torsades 風險。"
        ]
      ]
    },
    {
      "id": "class_019",
      "chapters": [
        30
      ],
      "match": "any",
      "terms": [
        "cardiac glycoside"
      ],
      "facts": [
        [
          "機轉",
          "抑制 Na⁺/K⁺-ATPase，間接增加細胞內 Ca²⁺；並增加迷走神經張力、降低 AV 傳導。"
        ],
        [
          "毒性",
          "噁心、視覺異常與多型態心律不整；低血鉀會增加毒性。"
        ]
      ]
    },
    {
      "id": "class_020",
      "chapters": [
        30
      ],
      "match": "any",
      "terms": [
        "sglt2 inhibitors"
      ],
      "facts": [
        [
          "機轉",
          "抑制近端小管 SGLT2，增加尿糖與尿鈉排泄。"
        ],
        [
          "ADR",
          "生殖泌尿感染、體液不足、正常血糖性酮酸中毒；具心腎保護考點。"
        ]
      ]
    },
    {
      "id": "class_021",
      "chapters": [
        30
      ],
      "match": "any",
      "terms": [
        "acei／arb",
        "arni"
      ],
      "facts": [
        [
          "心衰竭",
          "屬 HFrEF 疾病修飾治療；ARNI 為 neprilysin inhibitor 與 ARB 的組合。"
        ]
      ]
    },
    {
      "id": "class_022",
      "chapters": [
        31
      ],
      "match": "any",
      "terms": [
        "vitamin k antagonist"
      ],
      "facts": [
        [
          "機轉",
          "抑制 VKORC1，使凝血因子 II、VII、IX、X 與 protein C/S 的 γ-carboxylation 降低。"
        ],
        [
          "監測/逆轉",
          "監測 PT/INR；嚴重出血常以 vitamin K 加 4-factor PCC 逆轉。"
        ],
        [
          "藥化",
          "warfarin 為 4-hydroxycoumarin 衍生物。"
        ]
      ]
    },
    {
      "id": "class_023",
      "chapters": [
        31
      ],
      "match": "any",
      "terms": [
        "low-molecular-weight heparins",
        "unfractionated heparin"
      ],
      "facts": [
        [
          "機轉",
          "藉 antithrombin 抑制凝血；UFH 對 IIa/Xa，LMWH 對 Xa 較偏重。"
        ],
        [
          "ADR/逆轉",
          "出血與 HIT；protamine 對 UFH 逆轉較完整。"
        ]
      ]
    },
    {
      "id": "class_024",
      "chapters": [
        31
      ],
      "match": "any",
      "terms": [
        "直接 xa 抑制",
        "-xaban"
      ],
      "facts": [
        [
          "機轉",
          "直接抑制 factor Xa；不需 antithrombin。"
        ],
        [
          "逆轉",
          "andexanet alfa 可作為特異性逆轉藥；部分情境使用 PCC。"
        ]
      ]
    },
    {
      "id": "class_025",
      "chapters": [
        31
      ],
      "match": "any",
      "terms": [
        "直接凝血酶抑制"
      ],
      "facts": [
        [
          "機轉",
          "直接抑制 thrombin (IIa)。"
        ]
      ]
    },
    {
      "id": "class_026",
      "chapters": [
        31
      ],
      "match": "any",
      "terms": [
        "p2y12 inhibitors"
      ],
      "facts": [
        [
          "機轉",
          "抑制 ADP-P2Y12 receptor，降低 GP IIb/IIIa 活化與血小板聚集。"
        ]
      ]
    },
    {
      "id": "class_027",
      "chapters": [
        31
      ],
      "match": "any",
      "terms": [
        "gp iib/iiia inhibitors"
      ],
      "facts": [
        [
          "機轉",
          "阻斷血小板聚集的 final common pathway。"
        ]
      ]
    },
    {
      "id": "class_028",
      "chapters": [
        33
      ],
      "match": "any",
      "terms": [
        "statins"
      ],
      "facts": [
        [
          "機轉",
          "抑制 HMG-CoA reductase，增加肝臟 LDL receptor；降 LDL 效果最強。"
        ],
        [
          "ADR",
          "肌病/橫紋肌溶解與肝酵素上升；妊娠一般避免。"
        ]
      ]
    },
    {
      "id": "class_029",
      "chapters": [
        33
      ],
      "match": "any",
      "terms": [
        "fibrates"
      ],
      "facts": [
        [
          "機轉",
          "活化 PPAR-α，增加 lipoprotein lipase，主要降低 TG。"
        ],
        [
          "ADR",
          "膽結石與肌病；gemfibrozil 與 statin 併用肌病風險較高。"
        ]
      ]
    },
    {
      "id": "class_030",
      "chapters": [
        33
      ],
      "match": "any",
      "terms": [
        "npc1l1 inhibitor"
      ],
      "facts": [
        [
          "機轉",
          "抑制腸道 NPC1L1，降低膽固醇吸收。"
        ]
      ]
    },
    {
      "id": "class_031",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "penicillin",
        "aminopenicillins",
        "抗葡萄球菌青黴素",
        "抗綠膿桿菌青黴素"
      ],
      "facts": [
        [
          "機轉",
          "β-lactam 結合 PBP、抑制 transpeptidation 與細胞壁交聯；屬時間依賴型殺菌。"
        ],
        [
          "ADR",
          "過敏反應最常考；部分藥可造成間質性腎炎或癲癇風險。"
        ]
      ]
    },
    {
      "id": "class_032",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "cephalosporins"
      ],
      "facts": [
        [
          "機轉",
          "β-lactam 結合 PBP、抑制細胞壁合成；世代差異常考抗菌範圍。"
        ]
      ]
    },
    {
      "id": "class_033",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "carbapenems"
      ],
      "facts": [
        [
          "機轉",
          "廣效 β-lactam，對多數 β-lactamase 穩定。"
        ],
        [
          "ADR",
          "癲癇風險以 imipenem 較常考；需與 cilastatin 合用避免腎代謝。"
        ]
      ]
    },
    {
      "id": "class_034",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "monobactam"
      ],
      "facts": [
        [
          "重點",
          "aztreonam 主要涵蓋 aerobic gram-negative bacteria，與 penicillin 過敏交叉反應低。"
        ]
      ]
    },
    {
      "id": "class_035",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "glycopeptides"
      ],
      "facts": [
        [
          "機轉",
          "結合 D-Ala-D-Ala，抑制 peptidoglycan 延長。"
        ],
        [
          "ADR",
          "腎毒性與 infusion-related flushing（red-man reaction）常考。"
        ]
      ]
    },
    {
      "id": "class_036",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "aminoglycosides"
      ],
      "facts": [
        [
          "機轉",
          "不可逆結合 30S，造成 misreading；需氧依賴性進入細菌，對厭氧菌無效。"
        ],
        [
          "ADR",
          "腎毒性、耳毒性與神經肌肉阻斷。"
        ]
      ]
    },
    {
      "id": "class_037",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "tetracyclines",
        "glycylcycline"
      ],
      "facts": [
        [
          "機轉",
          "結合 30S，阻止 aminoacyl-tRNA 進入 A site。"
        ],
        [
          "ADR/交互作用",
          "與 Ca/Fe/Mg 螯合，牙齒變色、骨生長抑制與光敏感。"
        ]
      ]
    },
    {
      "id": "class_038",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "macrolides"
      ],
      "facts": [
        [
          "機轉",
          "結合 50S，抑制 translocation。"
        ],
        [
          "ADR/PK",
          "QT 延長；erythromycin/clarithromycin 抑制 CYP3A4，azithromycin 較少。"
        ]
      ]
    },
    {
      "id": "class_039",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "lincosamide"
      ],
      "facts": [
        [
          "重點",
          "clindamycin 抑制 50S，與 C. difficile colitis 關聯常考。"
        ]
      ]
    },
    {
      "id": "class_040",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "chloramphenicol"
      ],
      "facts": [
        [
          "ADR",
          "劑量相關骨髓抑制、罕見 aplastic anemia；新生兒 gray baby syndrome。"
        ]
      ]
    },
    {
      "id": "class_041",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "oxazolidinones"
      ],
      "facts": [
        [
          "機轉",
          "阻止 50S initiation complex 形成。"
        ],
        [
          "ADR/交互作用",
          "血小板減少、周邊/視神經病變；具 MAOI 活性，注意 serotonin syndrome。"
        ]
      ]
    },
    {
      "id": "class_042",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "fluoroquinolones"
      ],
      "facts": [
        [
          "機轉",
          "抑制 DNA gyrase/topoisomerase IV。"
        ],
        [
          "ADR",
          "肌腱病變、QT 延長、中樞副作用與軟骨毒性；與多價陽離子螯合。"
        ]
      ]
    },
    {
      "id": "class_043",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "sulfonamides",
        "dhfr"
      ],
      "facts": [
        [
          "機轉",
          "sulfonamide 抑制 dihydropteroate synthase；trimethoprim 抑制 bacterial DHFR。"
        ],
        [
          "ADR",
          "SJS、骨髓抑制、高血鉀、G6PD 溶血與 kernicterus。"
        ]
      ]
    },
    {
      "id": "class_044",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "nitroimidazoles"
      ],
      "facts": [
        [
          "重點",
          "對厭氧菌與部分原蟲；常考金屬味、周邊神經病變與酒精交互作用。"
        ]
      ]
    },
    {
      "id": "class_045",
      "chapters": [
        6
      ],
      "match": "any",
      "terms": [
        "rifamycins"
      ],
      "facts": [
        [
          "機轉",
          "抑制 DNA-dependent RNA polymerase。"
        ],
        [
          "PK/ADR",
          "強力 CYP/P-gp inducer、橘紅色體液與肝毒性。"
        ]
      ]
    },
    {
      "id": "class_046",
      "chapters": [
        7
      ],
      "match": "any",
      "terms": [
        "polyenes"
      ],
      "facts": [
        [
          "機轉",
          "結合 ergosterol 形成膜孔洞。"
        ],
        [
          "ADR",
          "amphotericin B 常考腎毒性、低血鉀/低血鎂與 infusion reaction。"
        ]
      ]
    },
    {
      "id": "class_047",
      "chapters": [
        7
      ],
      "match": "any",
      "terms": [
        "triazoles",
        "imidazoles"
      ],
      "facts": [
        [
          "機轉",
          "抑制 fungal 14-α-demethylase，降低 ergosterol。"
        ],
        [
          "PK/ADR",
          "多數抑制 CYP 且可肝毒性；各 azole 的 CYP 選擇性與分布常考。"
        ]
      ]
    },
    {
      "id": "class_048",
      "chapters": [
        7
      ],
      "match": "any",
      "terms": [
        "echinocandins"
      ],
      "facts": [
        [
          "機轉",
          "抑制 β-(1,3)-D-glucan synthase，破壞 fungal cell wall。"
        ]
      ]
    },
    {
      "id": "class_049",
      "chapters": [
        1
      ],
      "match": "any",
      "terms": [
        "neuraminidase"
      ],
      "facts": [
        [
          "機轉",
          "抑制 influenza neuraminidase，阻止新病毒釋放；越早治療效果越佳。"
        ]
      ]
    },
    {
      "id": "class_050",
      "chapters": [
        1
      ],
      "match": "any",
      "terms": [
        "m2 離子通道"
      ],
      "facts": [
        [
          "重點",
          "阻斷 influenza A M2 proton channel；抗藥性普遍且不涵蓋 influenza B。"
        ]
      ]
    },
    {
      "id": "class_051",
      "chapters": [
        1
      ],
      "match": "any",
      "terms": [
        "hsv/vzv"
      ],
      "facts": [
        [
          "機轉",
          "acyclovir 類經 viral thymidine kinase 活化後抑制 viral DNA polymerase。"
        ]
      ]
    },
    {
      "id": "class_052",
      "chapters": [
        1
      ],
      "match": "any",
      "terms": [
        "nrt",
        "逆轉錄酶抑制"
      ],
      "facts": [
        [
          "機轉",
          "核苷/核苷酸類似物經磷酸化後造成 reverse transcriptase chain termination。"
        ]
      ]
    },
    {
      "id": "class_053",
      "chapters": [
        1
      ],
      "match": "any",
      "terms": [
        "nnrti"
      ],
      "facts": [
        [
          "機轉",
          "非競爭性結合 HIV-1 reverse transcriptase allosteric site。"
        ]
      ]
    },
    {
      "id": "class_054",
      "chapters": [
        1
      ],
      "match": "any",
      "terms": [
        "protease 抑制劑"
      ],
      "facts": [
        [
          "重點",
          "HIV protease inhibitor 常考代謝異常、脂肪重新分布與 CYP3A4 交互作用。"
        ]
      ]
    },
    {
      "id": "class_055",
      "chapters": [
        1
      ],
      "match": "any",
      "terms": [
        "integrase"
      ],
      "facts": [
        [
          "機轉",
          "抑制 HIV integrase strand transfer。"
        ],
        [
          "交互作用",
          "與多價陽離子螯合，服藥時間需錯開。"
        ]
      ]
    },
    {
      "id": "class_056",
      "chapters": [
        1
      ],
      "match": "any",
      "terms": [
        "ns3/4a"
      ],
      "facts": [
        [
          "機轉",
          "HCV NS3/4A protease inhibitor；藥名常以 -previr 結尾。"
        ]
      ]
    },
    {
      "id": "class_057",
      "chapters": [
        1
      ],
      "match": "any",
      "terms": [
        "ns5a"
      ],
      "facts": [
        [
          "機轉",
          "HCV NS5A inhibitor；藥名常以 -asvir 結尾。"
        ]
      ]
    },
    {
      "id": "class_058",
      "chapters": [
        1
      ],
      "match": "any",
      "terms": [
        "ns5b"
      ],
      "facts": [
        [
          "機轉",
          "HCV NS5B polymerase inhibitor；藥名常以 -buvir 結尾。"
        ]
      ]
    },
    {
      "id": "class_059",
      "chapters": [
        17
      ],
      "match": "any",
      "terms": [
        "ssri"
      ],
      "facts": [
        [
          "機轉",
          "選擇性抑制 serotonin reuptake。"
        ],
        [
          "ADR",
          "性功能障礙、GI 不適、SIADH/低血鈉與 serotonin syndrome；停藥需漸進。"
        ]
      ]
    },
    {
      "id": "class_060",
      "chapters": [
        17
      ],
      "match": "any",
      "terms": [
        "snri"
      ],
      "facts": [
        [
          "機轉",
          "抑制 serotonin 與 norepinephrine reuptake。"
        ],
        [
          "ADR",
          "除 SSRI 類副作用外，可能升高血壓。"
        ]
      ]
    },
    {
      "id": "class_061",
      "chapters": [
        17
      ],
      "match": "any",
      "terms": [
        "tca"
      ],
      "facts": [
        [
          "機轉/毒性",
          "抑制 NE/5-HT reuptake，亦阻斷 M1、H1、α1 與 cardiac Na⁺ channel。"
        ],
        [
          "中毒",
          "過量可 QRS widening、心律不整與癲癇；sodium bicarbonate 為重點處置。"
        ]
      ]
    },
    {
      "id": "class_062",
      "chapters": [
        17
      ],
      "match": "any",
      "terms": [
        "maoi"
      ],
      "facts": [
        [
          "交互作用",
          "與 tyramine 可致高血壓危象；與 serotonergic drugs 可致 serotonin syndrome，需洗脫期。"
        ]
      ]
    },
    {
      "id": "class_063",
      "chapters": [
        17
      ],
      "match": "any",
      "terms": [
        "ndri"
      ],
      "facts": [
        [
          "重點",
          "bupropion 較少性功能障礙，但降低 seizure threshold；亦用於戒菸。"
        ]
      ]
    },
    {
      "id": "class_064",
      "chapters": [
        17
      ],
      "match": "any",
      "terms": [
        "nassa"
      ],
      "facts": [
        [
          "重點",
          "mirtazapine 常考鎮靜、食慾增加與體重上升。"
        ]
      ]
    },
    {
      "id": "class_065",
      "chapters": [
        17
      ],
      "match": "any",
      "terms": [
        "sari"
      ],
      "facts": [
        [
          "重點",
          "trazodone 常考鎮靜與 priapism。"
        ]
      ]
    },
    {
      "id": "class_066",
      "chapters": [
        18
      ],
      "match": "any",
      "terms": [
        "levodopa"
      ],
      "facts": [
        [
          "機轉",
          "levodopa 可穿越 BBB；carbidopa/benserazide 抑制周邊 DOPA decarboxylase。"
        ],
        [
          "ADR",
          "長期可有 wearing-off、on-off 與 dyskinesia。"
        ]
      ]
    },
    {
      "id": "class_067",
      "chapters": [
        18
      ],
      "match": "any",
      "terms": [
        "mao-b"
      ],
      "facts": [
        [
          "機轉",
          "抑制 dopamine 代謝、延長 levodopa 效果。"
        ]
      ]
    },
    {
      "id": "class_068",
      "chapters": [
        18
      ],
      "match": "any",
      "terms": [
        "comt"
      ],
      "facts": [
        [
          "機轉",
          "抑制 COMT，延長 levodopa 半衰期；tolcapone 肝毒性較重要。"
        ]
      ]
    },
    {
      "id": "class_069",
      "chapters": [
        21
      ],
      "match": "any",
      "terms": [
        "benzodiazepines"
      ],
      "facts": [
        [
          "機轉",
          "增強 GABA-A，增加 Cl⁻ channel 開啟頻率。"
        ],
        [
          "重點",
          "flumazenil 可逆轉但可能誘發癲癇；與 opioid/酒精合用呼吸抑制增加。"
        ]
      ]
    },
    {
      "id": "class_070",
      "chapters": [
        21
      ],
      "match": "any",
      "terms": [
        "barbiturates"
      ],
      "facts": [
        [
          "機轉",
          "增強 GABA-A，增加 Cl⁻ channel 開啟持續時間；高劑量可直接開啟。"
        ],
        [
          "PK",
          "多數具 CYP induction；治療窗較窄。"
        ]
      ]
    },
    {
      "id": "class_071",
      "chapters": [
        21
      ],
      "match": "any",
      "terms": [
        "z-drugs"
      ],
      "facts": [
        [
          "重點",
          "偏好 GABA-A α1 subunit，主用於失眠；仍可造成複雜睡眠行為。"
        ]
      ]
    },
    {
      "id": "class_072",
      "chapters": [
        22
      ],
      "match": "any",
      "terms": [
        "na+ channel",
        "快速失活"
      ],
      "facts": [
        [
          "機轉",
          "多數抗癲癇藥藉延長 voltage-gated Na⁺ channel inactivation 抑制高頻放電。"
        ]
      ]
    },
    {
      "id": "class_073",
      "chapters": [
        22
      ],
      "match": "any",
      "terms": [
        "t-type"
      ],
      "facts": [
        [
          "重點",
          "ethosuximide 抑制 thalamic T-type Ca²⁺ channel，為 absence seizure 經典藥。"
        ]
      ]
    },
    {
      "id": "class_074",
      "chapters": [
        22
      ],
      "match": "any",
      "terms": [
        "α2δ ligands"
      ],
      "facts": [
        [
          "機轉",
          "gabapentin/pregabalin 結合 voltage-gated Ca²⁺ channel α2δ subunit，降低興奮性傳遞。"
        ]
      ]
    },
    {
      "id": "class_075",
      "chapters": [
        22
      ],
      "match": "any",
      "terms": [
        "sv2a"
      ],
      "facts": [
        [
          "機轉",
          "結合 synaptic vesicle protein SV2A；levetiracetam 常考情緒/行為副作用。"
        ]
      ]
    },
    {
      "id": "class_076",
      "chapters": [
        23
      ],
      "match": "all",
      "terms": [
        "第一代",
        "高效價"
      ],
      "facts": [
        [
          "抗精神病",
          "D2 blockade；高效價第一代較易 EPS、hyperprolactinemia 與 NMS。"
        ]
      ]
    },
    {
      "id": "class_077",
      "chapters": [
        23
      ],
      "match": "any",
      "terms": [
        "第二代",
        "atypical"
      ],
      "facts": [
        [
          "抗精神病",
          "多為 5-HT2A/D2 antagonism；代謝症候群為常考副作用。"
        ]
      ]
    },
    {
      "id": "class_078",
      "chapters": [
        23
      ],
      "match": "any",
      "terms": [
        "d2 partial agonists"
      ],
      "facts": [
        [
          "機轉",
          "D2 partial agonist，可視 dopamine tone 作功能性穩定。"
        ]
      ]
    },
    {
      "id": "class_079",
      "chapters": [
        40
      ],
      "match": "any",
      "terms": [
        "完整致效劑",
        "opioids"
      ],
      "facts": [
        [
          "藥理",
          "μ-opioid agonism 常造成鎮痛、縮瞳、便祕與呼吸抑制。"
        ],
        [
          "解毒",
          "naloxone 起效快但半衰期短，可能需重複給藥。"
        ]
      ]
    },
    {
      "id": "class_080",
      "chapters": [
        35
      ],
      "match": "any",
      "terms": [
        "glucocorticoids"
      ],
      "facts": [
        [
          "ADR",
          "高血糖、感染、骨質疏鬆、肌病、精神症狀與 HPA axis suppression；長期停藥需漸減。"
        ]
      ]
    },
    {
      "id": "class_081",
      "chapters": [
        37
      ],
      "match": "any",
      "terms": [
        "bisphosphonates"
      ],
      "facts": [
        [
          "機轉",
          "結合骨中 hydroxyapatite，抑制 osteoclast。"
        ],
        [
          "ADR",
          "食道炎、顎骨壞死、非典型股骨骨折；口服需空腹直立服用。"
        ]
      ]
    },
    {
      "id": "class_082",
      "chapters": [
        37
      ],
      "match": "any",
      "terms": [
        "rankl inhibitor"
      ],
      "facts": [
        [
          "機轉/ADR",
          "denosumab 抑制 RANKL；可低血鈣，停藥後有 rebound vertebral fracture 風險。"
        ]
      ]
    },
    {
      "id": "class_083",
      "chapters": [
        37
      ],
      "match": "any",
      "terms": [
        "pth/pthrp"
      ],
      "facts": [
        [
          "機轉",
          "間歇性 PTH/PTHrP analog 促進骨生成。"
        ]
      ]
    },
    {
      "id": "class_084",
      "chapters": [
        36,
        37
      ],
      "match": "any",
      "terms": [
        "serms"
      ],
      "facts": [
        [
          "藥理",
          "selective estrogen receptor modulator；不同組織可呈 agonist/antagonist。"
        ]
      ]
    },
    {
      "id": "class_085",
      "chapters": [
        36,
        37
      ],
      "match": "any",
      "terms": [
        "aromatase inhibitors"
      ],
      "facts": [
        [
          "機轉/ADR",
          "抑制 estrogen 合成；常考骨質流失與關節痛。"
        ]
      ]
    },
    {
      "id": "class_086",
      "chapters": [
        36,
        37
      ],
      "match": "any",
      "terms": [
        "androgen receptor antagonists"
      ],
      "facts": [
        [
          "機轉",
          "非類固醇 androgen receptor antagonist，常用於前列腺癌。"
        ],
        [
          "ADR",
          "可見性慾下降、勃起功能障礙與乳房發育；部分藥有肝毒性或中樞副作用。"
        ]
      ]
    },
    {
      "id": "class_087",
      "chapters": [
        36,
        37
      ],
      "match": "any",
      "terms": [
        "5α-reductase"
      ],
      "facts": [
        [
          "機轉",
          "抑制 testosterone 轉為 DHT；用於 BPH/雄性禿。"
        ]
      ]
    },
    {
      "id": "class_088",
      "chapters": [
        38
      ],
      "match": "any",
      "terms": [
        "thioamides"
      ],
      "facts": [
        [
          "機轉",
          "抑制 thyroid peroxidase；PTU 另抑制周邊 T4→T3。"
        ],
        [
          "ADR",
          "agranu­locytosis 與肝毒性；孕期選擇依 trimester 常考。"
        ]
      ]
    },
    {
      "id": "class_089",
      "chapters": [
        39
      ],
      "match": "any",
      "terms": [
        "sulfonylureas"
      ],
      "facts": [
        [
          "機轉",
          "關閉 β-cell KATP channel，促進 insulin 釋放。"
        ],
        [
          "ADR",
          "低血糖與體重增加。"
        ]
      ]
    },
    {
      "id": "class_090",
      "chapters": [
        39
      ],
      "match": "any",
      "terms": [
        "meglitinides"
      ],
      "facts": [
        [
          "機轉",
          "短效關閉 KATP channel，餐前使用、降低餐後血糖。"
        ]
      ]
    },
    {
      "id": "class_091",
      "chapters": [
        39
      ],
      "match": "any",
      "terms": [
        "biguanide"
      ],
      "facts": [
        [
          "機轉",
          "metformin 降低肝糖質新生、增加 insulin sensitivity。"
        ],
        [
          "ADR",
          "GI 不適、B12 缺乏與罕見 lactic acidosis；不致低血糖。"
        ]
      ]
    },
    {
      "id": "class_092",
      "chapters": [
        39
      ],
      "match": "any",
      "terms": [
        "thiazolidinediones"
      ],
      "facts": [
        [
          "機轉",
          "PPAR-γ agonist，增加 insulin sensitivity。"
        ],
        [
          "ADR",
          "體液滯留、心衰竭惡化、體重增加與骨折。"
        ]
      ]
    },
    {
      "id": "class_093",
      "chapters": [
        39
      ],
      "match": "any",
      "terms": [
        "dpp-4 inhibitors"
      ],
      "facts": [
        [
          "機轉",
          "延長 endogenous GLP-1/GIP；體重中性、低血糖風險低。"
        ]
      ]
    },
    {
      "id": "class_094",
      "chapters": [
        39
      ],
      "match": "any",
      "terms": [
        "glp-1 receptor agonists"
      ],
      "facts": [
        [
          "機轉",
          "增加 glucose-dependent insulin、降低 glucagon、延緩胃排空並降低食慾。"
        ],
        [
          "ADR",
          "GI 不適；胰臟炎與膽囊疾病為常考警訊。"
        ]
      ]
    },
    {
      "id": "class_095",
      "chapters": [
        39
      ],
      "match": "any",
      "terms": [
        "α-glucosidase"
      ],
      "facts": [
        [
          "機轉",
          "延緩腸道醣類分解吸收；主要降低餐後血糖。"
        ],
        [
          "ADR",
          "脹氣、腹瀉；低血糖時需用 glucose 而非 sucrose。"
        ]
      ]
    },
    {
      "id": "class_096",
      "chapters": [
        42
      ],
      "match": "any",
      "terms": [
        "salicylates"
      ],
      "facts": [
        [
          "機轉",
          "aspirin 不可逆 acetylate COX；低劑量抑制 platelet TXA₂。"
        ],
        [
          "毒性",
          "耳鳴、呼吸性鹼中毒後代謝性酸中毒；兒童病毒感染避免 Reye syndrome。"
        ]
      ]
    },
    {
      "id": "class_097",
      "chapters": [
        42
      ],
      "match": "any",
      "terms": [
        "propionic acid",
        "acetic acid",
        "oxicams",
        "fenamates",
        "coxibs"
      ],
      "facts": [
        [
          "機轉/ADR",
          "NSAID 抑制 COX，降低 prostaglandin；GI 出血、腎灌流下降與心血管風險常考。"
        ]
      ]
    },
    {
      "id": "class_098",
      "chapters": [
        43
      ],
      "match": "any",
      "terms": [
        "xanthine oxidase inhibitors"
      ],
      "facts": [
        [
          "機轉",
          "抑制 xanthine oxidase、降低 uric acid；啟始時可誘發痛風發作。"
        ]
      ]
    },
    {
      "id": "class_099",
      "chapters": [
        43
      ],
      "match": "any",
      "terms": [
        "uricosurics"
      ],
      "facts": [
        [
          "機轉",
          "抑制近端小管 urate reabsorption、增加尿酸排泄；腎結石風險。"
        ]
      ]
    },
    {
      "id": "class_100",
      "chapters": [
        44,
        45
      ],
      "match": "any",
      "terms": [
        "h1 第一代"
      ],
      "facts": [
        [
          "重點",
          "可穿 BBB，鎮靜與抗膽鹼副作用較明顯。"
        ]
      ]
    },
    {
      "id": "class_101",
      "chapters": [
        44,
        45
      ],
      "match": "any",
      "terms": [
        "h1 第二代"
      ],
      "facts": [
        [
          "重點",
          "較不進入 CNS，鎮靜較少。"
        ]
      ]
    },
    {
      "id": "class_102",
      "chapters": [
        44,
        45
      ],
      "match": "any",
      "terms": [
        "h2 blocker"
      ],
      "facts": [
        [
          "機轉",
          "阻斷 gastric parietal cell H2 receptor，降低胃酸。"
        ]
      ]
    },
    {
      "id": "class_103",
      "chapters": [
        45
      ],
      "match": "any",
      "terms": [
        "proton pump inhibitors",
        "ppi"
      ],
      "facts": [
        [
          "機轉",
          "不可逆抑制 parietal cell H⁺/K⁺-ATPase；需在活化的 proton pump 作用。"
        ],
        [
          "長期風險",
          "低鎂、B12/鐵吸收下降、骨折與 C. difficile 關聯常考。"
        ]
      ]
    },
    {
      "id": "class_104",
      "chapters": [
        46
      ],
      "match": "any",
      "terms": [
        "5-ht3 antagonists"
      ],
      "facts": [
        [
          "機轉/ADR",
          "阻斷 5-HT3，常用於化療或術後噁心；可 QT 延長與便祕。"
        ]
      ]
    },
    {
      "id": "class_105",
      "chapters": [
        46
      ],
      "match": "any",
      "terms": [
        "dopamine antagonists／prokinetic"
      ],
      "facts": [
        [
          "機轉/ADR",
          "D2 antagonism 可促進胃排空；metoclopramide 可 EPS、tardive dyskinesia 與 hyperprolactinemia。"
        ]
      ]
    },
    {
      "id": "class_106",
      "chapters": [
        46
      ],
      "match": "any",
      "terms": [
        "nk1 antagonists"
      ],
      "facts": [
        [
          "機轉",
          "阻斷 substance P-NK1 receptor，常與 5-HT3 antagonist/dexamethasone 合用於化療止吐。"
        ]
      ]
    },
    {
      "id": "class_107",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "nitrogen mustards",
        "nitrosoureas",
        "alkyl sulfonate",
        "triazene"
      ],
      "facts": [
        [
          "機轉",
          "烷化 DNA、形成 cross-link；多屬 cell-cycle nonspecific。"
        ],
        [
          "ADR",
          "骨髓抑制、致癌性與生殖毒性為共同考點；各藥另有特異毒性。"
        ]
      ]
    },
    {
      "id": "class_108",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "platinum compounds"
      ],
      "facts": [
        [
          "機轉",
          "形成 DNA cross-link，作用類似 alkylating agent；cell-cycle nonspecific。"
        ],
        [
          "ADR",
          "腎毒性、耳毒性、周邊神經病變與嚴重噁心嘔吐依藥物而異。"
        ]
      ]
    },
    {
      "id": "class_109",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "葉酸拮抗劑"
      ],
      "facts": [
        [
          "機轉",
          "抑制 folate-dependent nucleotide synthesis；屬 S phase antimetabolite。"
        ]
      ]
    },
    {
      "id": "class_110",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "pyrimidine 類似物"
      ],
      "facts": [
        [
          "機轉",
          "pyrimidine antimetabolite，干擾 DNA/RNA synthesis；多為 S phase specific。"
        ]
      ]
    },
    {
      "id": "class_111",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "purine 類似物"
      ],
      "facts": [
        [
          "機轉",
          "purine antimetabolite，抑制核苷酸合成或嵌入核酸；多為 S phase specific。"
        ]
      ]
    },
    {
      "id": "class_112",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "topoisomerase i"
      ],
      "facts": [
        [
          "機轉",
          "抑制 topoisomerase I，造成 single-strand DNA break；S phase 較敏感。"
        ]
      ]
    },
    {
      "id": "class_113",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "topoisomerase ii"
      ],
      "facts": [
        [
          "機轉",
          "抑制 topoisomerase II，造成 double-strand DNA break；S/G2 phase 較敏感。"
        ]
      ]
    },
    {
      "id": "class_114",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "anthracyclines"
      ],
      "facts": [
        [
          "機轉",
          "DNA intercalation、topoisomerase II inhibition 並產生 free radicals。"
        ],
        [
          "ADR",
          "累積劑量相關 cardiomyopathy；dexrazoxane 可降低心毒性。"
        ]
      ]
    },
    {
      "id": "class_115",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "vinca alkaloids"
      ],
      "facts": [
        [
          "機轉",
          "抑制 microtubule polymerization，M phase specific。"
        ]
      ]
    },
    {
      "id": "class_116",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "taxanes"
      ],
      "facts": [
        [
          "機轉",
          "穩定 microtubule、阻止 depolymerization，M phase specific。"
        ]
      ]
    },
    {
      "id": "class_117",
      "chapters": [
        2
      ],
      "match": "any",
      "terms": [
        "asparagine depletion"
      ],
      "facts": [
        [
          "機轉",
          "消耗 asparagine，常用於 ALL。"
        ],
        [
          "ADR",
          "胰臟炎、血栓/出血與過敏反應。"
        ]
      ]
    },
    {
      "id": "class_118",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "bcr-abl"
      ],
      "facts": [
        [
          "機轉",
          "抑制 BCR-ABL tyrosine kinase；CML 經典標靶。"
        ]
      ]
    },
    {
      "id": "class_119",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "egfr tyrosine kinase"
      ],
      "facts": [
        [
          "機轉/ADR",
          "EGFR TKI；常考 acneiform rash、腹瀉與間質性肺病。"
        ]
      ]
    },
    {
      "id": "class_120",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "alk／ros1"
      ],
      "facts": [
        [
          "機轉",
          "抑制 ALK/ROS1 fusion kinase；常用於特定 driver mutation 的 NSCLC。"
        ]
      ]
    },
    {
      "id": "class_121",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "her2 tyrosine kinase"
      ],
      "facts": [
        [
          "機轉",
          "HER2-directed small-molecule TKI。"
        ]
      ]
    },
    {
      "id": "class_122",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "vegfr／multikinase"
      ],
      "facts": [
        [
          "ADR",
          "抗 VEGF pathway 常考高血壓、蛋白尿、出血/血栓與傷口癒合不良。"
        ]
      ]
    },
    {
      "id": "class_123",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "braf 抑制劑"
      ],
      "facts": [
        [
          "機轉",
          "抑制 mutant BRAF；常與 MEK inhibitor 合併以降低抗藥與皮膚副作用。"
        ]
      ]
    },
    {
      "id": "class_124",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "mek 抑制劑"
      ],
      "facts": [
        [
          "機轉",
          "抑制 MAPK/ERK kinase；常與 BRAF inhibitor 合併。"
        ]
      ]
    },
    {
      "id": "class_125",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "parp 抑制劑"
      ],
      "facts": [
        [
          "機轉",
          "抑制 DNA single-strand break repair；BRCA/HRD 腫瘤具 synthetic lethality。"
        ],
        [
          "ADR",
          "骨髓抑制與少見 MDS/AML。"
        ]
      ]
    },
    {
      "id": "class_126",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "cdk4/6"
      ],
      "facts": [
        [
          "機轉",
          "抑制 RB phosphorylation，使細胞停在 G1。"
        ],
        [
          "ADR",
          "neutropenia（palbociclib/ribociclib）或 diarrhea（abemaciclib）常考。"
        ]
      ]
    },
    {
      "id": "class_127",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "mtor 抑制劑"
      ],
      "facts": [
        [
          "ADR",
          "口腔炎、高血糖、高血脂、骨髓抑制與非感染性肺炎。"
        ]
      ]
    },
    {
      "id": "class_128",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "proteasome 抑制劑"
      ],
      "facts": [
        [
          "機轉",
          "抑制 26S proteasome；multiple myeloma 常用。"
        ],
        [
          "ADR",
          "周邊神經病變與 herpes zoster reactivation。"
        ]
      ]
    },
    {
      "id": "class_129",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "hdac 抑制劑"
      ],
      "facts": [
        [
          "機轉",
          "抑制 histone deacetylase，改變 chromatin 與 gene expression。"
        ]
      ]
    },
    {
      "id": "class_130",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "bcl-2 抑制劑"
      ],
      "facts": [
        [
          "機轉/ADR",
          "促進 apoptosis；tumor lysis syndrome 是 venetoclax 高頻考點。"
        ]
      ]
    },
    {
      "id": "class_131",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "btk 抑制劑"
      ],
      "facts": [
        [
          "機轉",
          "抑制 B-cell receptor signaling 的 BTK。"
        ],
        [
          "ADR",
          "出血、心房顫動與感染風險常考。"
        ]
      ]
    },
    {
      "id": "class_132",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "pd-1",
        "pd-l1",
        "ctla-4"
      ],
      "facts": [
        [
          "機轉",
          "immune checkpoint inhibitor，解除 T-cell inhibition。"
        ],
        [
          "ADR",
          "immune-related adverse events：皮膚、腸炎、肝炎、肺炎與內分泌炎症。"
        ]
      ]
    },
    {
      "id": "class_133",
      "chapters": [
        3
      ],
      "match": "any",
      "terms": [
        "adc"
      ],
      "facts": [
        [
          "機轉",
          "antibody-drug conjugate 將細胞毒性 payload 定向送入表現特定抗原的腫瘤細胞。"
        ]
      ]
    },
    {
      "id": "class_134",
      "chapters": [
        4
      ],
      "match": "any",
      "terms": [
        "calcineurin 抑制劑"
      ],
      "facts": [
        [
          "機轉",
          "抑制 calcineurin/NFAT，降低 IL-2 transcription 與 T-cell activation。"
        ],
        [
          "ADR",
          "腎毒性、高血壓、神經毒性；tacrolimus 常見糖尿病，cyclosporine 常見牙齦增生/多毛。"
        ]
      ]
    },
    {
      "id": "class_135",
      "chapters": [
        4
      ],
      "match": "all",
      "terms": [
        "抗代謝物",
        "傳統免疫抑制"
      ],
      "facts": [
        [
          "免疫",
          "抑制淋巴球增殖；骨髓抑制、感染與肝毒性依藥物而異。"
        ]
      ]
    },
    {
      "id": "class_136",
      "chapters": [
        4
      ],
      "match": "any",
      "terms": [
        "tnf-α"
      ],
      "facts": [
        [
          "ADR",
          "感染與 tuberculosis/HBV reactivation；治療前常考篩檢。"
        ]
      ]
    },
    {
      "id": "class_137",
      "chapters": [
        4
      ],
      "match": "any",
      "terms": [
        "il-1 pathway",
        "il-6 receptor",
        "il-12/23",
        "il-23",
        "il-17 pathway",
        "il-4/13"
      ],
      "facts": [
        [
          "機轉",
          "cytokine-targeted biologic；需依疾病與感染風險辨識標的。"
        ]
      ]
    },
    {
      "id": "class_138",
      "chapters": [
        4
      ],
      "match": "any",
      "terms": [
        "t-cell costimulation"
      ],
      "facts": [
        [
          "機轉",
          "CTLA-4-Ig 融合蛋白阻斷 CD80/86–CD28 costimulation。"
        ]
      ]
    },
    {
      "id": "class_139",
      "chapters": [
        4
      ],
      "match": "any",
      "terms": [
        "integrin 抑制劑"
      ],
      "facts": [
        [
          "機轉",
          "阻斷 leukocyte adhesion/trafficking；natalizumab 常考 PML 風險。"
        ]
      ]
    },
    {
      "id": "class_140",
      "chapters": [
        4
      ],
      "match": "any",
      "terms": [
        "jak 抑制劑"
      ],
      "facts": [
        [
          "機轉",
          "抑制 JAK-STAT cytokine signaling。"
        ],
        [
          "ADR",
          "感染、herpes zoster、血栓與重大心血管事件警訊。"
        ]
      ]
    },
    {
      "id": "class_141",
      "chapters": [
        10
      ],
      "match": "any",
      "terms": [
        "β2 agonists（saba）",
        "β2 agonists（laba"
      ],
      "facts": [
        [
          "機轉",
          "β₂ agonist 增加 cAMP、支氣管擴張。"
        ],
        [
          "ADR",
          "顫抖、心搏過速與低血鉀；LABA 在 asthma 通常需合併 inhaled corticosteroid。"
        ]
      ]
    },
    {
      "id": "class_142",
      "chapters": [
        10
      ],
      "match": "any",
      "terms": [
        "α1 agonists"
      ],
      "facts": [
        [
          "機轉",
          "α₁ agonist 造成血管收縮；常用於低血壓、鼻充血或散瞳。"
        ]
      ]
    },
    {
      "id": "class_143",
      "chapters": [
        10
      ],
      "match": "any",
      "terms": [
        "非選擇性／混合作用 catecholamines"
      ],
      "facts": [
        [
          "重點",
          "catecholamine 的 α/β 受體選擇性與劑量依賴效應是高頻考點。"
        ]
      ]
    },
    {
      "id": "class_144",
      "chapters": [
        11,
        5
      ],
      "match": "any",
      "terms": [
        "直接 muscarinic agonists"
      ],
      "facts": [
        [
          "機轉",
          "直接刺激 muscarinic receptor；可促進排尿、唾液或縮瞳。"
        ],
        [
          "ADR",
          "膽鹼性副作用：流涎、腹瀉、支氣管收縮與心搏過慢。"
        ]
      ]
    },
    {
      "id": "class_145",
      "chapters": [
        11,
        5
      ],
      "match": "any",
      "terms": [
        "acetylcholinesterase 抑制劑",
        "ache 抑制劑"
      ],
      "facts": [
        [
          "機轉",
          "抑制 acetylcholinesterase、增加 synaptic ACh。"
        ],
        [
          "ADR",
          "muscarinic 與 nicotinic cholinergic excess；過量可致 cholinergic crisis。"
        ]
      ]
    },
    {
      "id": "class_146",
      "chapters": [
        11,
        5
      ],
      "match": "any",
      "terms": [
        "muscarinic 拮抗"
      ],
      "facts": [
        [
          "ADR",
          "抗膽鹼副作用：口乾、散瞳、尿滯留、便祕、心搏過速與譫妄。"
        ]
      ]
    },
    {
      "id": "class_147",
      "chapters": [
        13
      ],
      "match": "any",
      "terms": [
        "非去極化阻斷"
      ],
      "facts": [
        [
          "機轉",
          "競爭性阻斷 Nm receptor；可由 neostigmine 或 sugammadex（特定 aminosteroid）逆轉。"
        ]
      ]
    },
    {
      "id": "class_148",
      "chapters": [
        13
      ],
      "match": "any",
      "terms": [
        "去極化阻斷"
      ],
      "facts": [
        [
          "機轉/ADR",
          "succinylcholine 持續去極化；高血鉀、惡性高熱與延長呼吸抑制常考。"
        ]
      ]
    },
    {
      "id": "class_149",
      "chapters": [
        5,
        24
      ],
      "match": "any",
      "terms": [
        "botulinum toxin"
      ],
      "facts": [
        [
          "機轉",
          "切割 SNARE proteins、抑制 ACh vesicle release。"
        ]
      ]
    },
    {
      "id": "class_150",
      "chapters": [
        5,
        24
      ],
      "match": "any",
      "terms": [
        "中樞性肌肉鬆弛劑"
      ],
      "facts": [
        [
          "重點",
          "多數造成鎮靜；baclofen 為 GABA-B agonist，tizanidine 為 α₂ agonist。"
        ]
      ]
    },
    {
      "id": "class_151",
      "chapters": [
        14
      ],
      "match": "any",
      "terms": [
        "triptans"
      ],
      "facts": [
        [
          "機轉",
          "5-HT1B/1D agonist，收縮顱內血管並抑制 trigeminal neuropeptide release。"
        ],
        [
          "禁忌",
          "缺血性心血管疾病與 uncontrolled hypertension 通常避免。"
        ]
      ]
    },
    {
      "id": "class_152",
      "chapters": [
        14
      ],
      "match": "any",
      "terms": [
        "gepant"
      ],
      "facts": [
        [
          "機轉",
          "CGRP receptor antagonist；不像 triptan 直接血管收縮。"
        ]
      ]
    },
    {
      "id": "class_153",
      "chapters": [
        14
      ],
      "match": "any",
      "terms": [
        "ergot alkaloids"
      ],
      "facts": [
        [
          "重點",
          "廣泛 serotonin/adrenergic receptor 活性；可造成血管痙攣，妊娠禁用。"
        ]
      ]
    },
    {
      "id": "class_154",
      "chapters": [
        15,
        46
      ],
      "match": "any",
      "terms": [
        "5-ht3 antagonists"
      ],
      "facts": [
        [
          "機轉/ADR",
          "阻斷 5-HT3，常用於止吐；QT 延長與便祕。"
        ]
      ]
    },
    {
      "id": "class_155",
      "chapters": [
        19
      ],
      "match": "any",
      "terms": [
        "volatile halogenated agents"
      ],
      "facts": [
        [
          "重點",
          "吸入麻醉 potency 以 MAC 反向表示；血氣分配係數影響誘導/甦醒速度。"
        ],
        [
          "ADR",
          "低血壓、呼吸抑制；易感者可惡性高熱。"
        ]
      ]
    },
    {
      "id": "class_156",
      "chapters": [
        20
      ],
      "match": "any",
      "terms": [
        "ester 類"
      ],
      "facts": [
        [
          "藥化",
          "ester local anesthetic 多由 plasma pseudocholinesterase 水解，較易產生 PABA-related allergy。"
        ]
      ]
    },
    {
      "id": "class_157",
      "chapters": [
        20
      ],
      "match": "any",
      "terms": [
        "amide 類"
      ],
      "facts": [
        [
          "藥化",
          "amide local anesthetic 主要在肝代謝；名稱常有兩個 i。"
        ]
      ]
    },
    {
      "id": "class_158",
      "chapters": [
        21
      ],
      "match": "any",
      "terms": [
        "orexin receptor antagonists"
      ],
      "facts": [
        [
          "機轉",
          "阻斷 orexin wake-promoting signaling，用於失眠。"
        ]
      ]
    },
    {
      "id": "class_159",
      "chapters": [
        34
      ],
      "match": "any",
      "terms": [
        "gnrh agonists"
      ],
      "facts": [
        [
          "機轉",
          "持續給藥先 flare、後 receptor downregulation；用於前列腺癌、子宮內膜異位等。"
        ]
      ]
    },
    {
      "id": "class_160",
      "chapters": [
        34
      ],
      "match": "any",
      "terms": [
        "gnrh antagonists"
      ],
      "facts": [
        [
          "機轉",
          "直接阻斷 GnRH receptor，不造成初期 flare。"
        ]
      ]
    },
    {
      "id": "class_161",
      "chapters": [
        34
      ],
      "match": "any",
      "terms": [
        "somatostatin analogs"
      ],
      "facts": [
        [
          "機轉",
          "抑制 GH 與多種胃腸激素；常考膽結石、糖代謝異常。"
        ]
      ]
    },
    {
      "id": "class_162",
      "chapters": [
        34
      ],
      "match": "any",
      "terms": [
        "vasopressin agonists"
      ],
      "facts": [
        [
          "重點",
          "desmopressin 偏 V2；可治 central DI/vWD，但有低血鈉風險。"
        ]
      ]
    },
    {
      "id": "class_163",
      "chapters": [
        34
      ],
      "match": "any",
      "terms": [
        "vasopressin antagonists"
      ],
      "facts": [
        [
          "機轉",
          "V2/V1a antagonism 造成 aquaresis；可治 euvolemic/hypervolemic hyponatremia。"
        ]
      ]
    },
    {
      "id": "class_164",
      "chapters": [
        41
      ],
      "match": "any",
      "terms": [
        "pge1",
        "pge2",
        "pgf2",
        "prostacyclin"
      ],
      "facts": [
        [
          "重點",
          "prostaglandin analog 的受體選擇性決定用途：子宮、胃黏膜、青光眼或 pulmonary hypertension。"
        ]
      ]
    },
    {
      "id": "class_165",
      "chapters": [
        45
      ],
      "match": "any",
      "terms": [
        "antacids"
      ],
      "facts": [
        [
          "交互作用",
          "可改變胃內 pH 或螯合其他藥，影響吸收；Mg 易腹瀉、Al 易便祕。"
        ]
      ]
    },
    {
      "id": "class_166",
      "chapters": [
        46
      ],
      "match": "any",
      "terms": [
        "bulk-forming"
      ],
      "facts": [
        [
          "重點",
          "bulk-forming laxative 需足量水分，起效較慢。"
        ]
      ]
    },
    {
      "id": "class_167",
      "chapters": [
        46
      ],
      "match": "all",
      "terms": [
        "osmotic",
        "瀉劑"
      ],
      "facts": [
        [
          "重點",
          "osmotic laxative 將水分留在腸腔；不同鹽類可造成電解質問題。"
        ]
      ]
    },
    {
      "id": "class_168",
      "chapters": [
        46
      ],
      "match": "all",
      "terms": [
        "stimulant",
        "瀉劑"
      ],
      "facts": [
        [
          "重點",
          "刺激腸蠕動與分泌，常見腹絞痛。"
        ]
      ]
    },
    {
      "id": "class_169",
      "chapters": [
        46
      ],
      "match": "any",
      "terms": [
        "pamora"
      ],
      "facts": [
        [
          "機轉",
          "peripherally acting μ-opioid receptor antagonist，治 opioid-induced constipation 而不明顯逆轉中樞止痛。"
        ]
      ]
    },
    {
      "id": "class_170",
      "chapters": [
        47
      ],
      "match": "any",
      "terms": [
        "acetaminophen"
      ],
      "facts": [
        [
          "解毒",
          "N-acetylcysteine 補充 glutathione、處理 toxic NAPQI。"
        ]
      ]
    },
    {
      "id": "class_171",
      "chapters": [
        47
      ],
      "match": "any",
      "terms": [
        "有機磷",
        "pralidoxime"
      ],
      "facts": [
        [
          "解毒",
          "atropine 處理 muscarinic symptoms；pralidoxime 在 aging 前重新活化 AChE。"
        ]
      ]
    },
    {
      "id": "class_172",
      "chapters": [
        47
      ],
      "match": "any",
      "terms": [
        "cyanide"
      ],
      "facts": [
        [
          "解毒",
          "hydroxocobalamin 結合 cyanide；nitrite/thiosulfate 為另一策略。"
        ]
      ]
    },
    {
      "id": "class_173",
      "chapters": [
        47
      ],
      "match": "any",
      "terms": [
        "methemoglobinemia"
      ],
      "facts": [
        [
          "解毒",
          "methylene blue 經 NADPH-dependent reduction；G6PD deficiency 需小心。"
        ]
      ]
    },
    {
      "id": "class_174",
      "chapters": [
        9
      ],
      "match": "any",
      "terms": [
        "4-aminoquinolines",
        "quinoline methanols",
        "8-aminoquinolines"
      ],
      "facts": [
        [
          "抗瘧",
          "quinoline 類的作用階段不同；primaquine/tafenoquine 清除肝內 hypnozoite，但需先評估 G6PD。"
        ]
      ]
    },
    {
      "id": "class_175",
      "chapters": [
        9
      ],
      "match": "any",
      "terms": [
        "artemisinin"
      ],
      "facts": [
        [
          "抗瘧",
          "快速清除血中瘧原蟲，通常採 artemisinin-based combination therapy 以降低抗藥性。"
        ]
      ]
    },
    {
      "id": "class_176",
      "chapters": [
        9
      ],
      "match": "any",
      "terms": [
        "atovaquone/proguanil",
        "粒線體／葉酸路徑"
      ],
      "facts": [
        [
          "抗瘧",
          "atovaquone 抑制 mitochondrial electron transport；proguanil 影響 folate metabolism。"
        ]
      ]
    },
    {
      "id": "class_177",
      "chapters": [
        9
      ],
      "match": "any",
      "terms": [
        "腔內殺蟲劑"
      ],
      "facts": [
        [
          "原蟲",
          "luminal amebicide 清除腸腔囊體；侵襲性 amebiasis 常需 tissue agent 加 luminal agent。"
        ]
      ]
    },
    {
      "id": "class_178",
      "chapters": [
        9
      ],
      "match": "any",
      "terms": [
        "非洲睡眠病",
        "chagas disease"
      ],
      "facts": [
        [
          "原蟲",
          "依 Trypanosoma 種類與疾病期選藥；藥物毒性常為考點。"
        ]
      ]
    },
    {
      "id": "class_179",
      "chapters": [
        8
      ],
      "match": "any",
      "terms": [
        "ripe"
      ],
      "facts": [
        [
          "結核",
          "第一線 RIPE：rifampin、isoniazid、pyrazinamide、ethambutol；需辨識各自特異毒性。"
        ]
      ]
    },
    {
      "id": "class_180",
      "chapters": [
        8
      ],
      "match": "all",
      "terms": [
        "fluoroquinolones",
        "第二線"
      ],
      "facts": [
        [
          "結核",
          "levofloxacin/moxifloxacin 為抗藥性結核的重要第二線藥。"
        ]
      ]
    },
    {
      "id": "class_181",
      "chapters": [
        8
      ],
      "match": "any",
      "terms": [
        "新型與核心藥物"
      ],
      "facts": [
        [
          "結核",
          "bedaquiline 抑制 mycobacterial ATP synthase；linezolid、pretomanid 等用於特定 MDR/XDR 組合。"
        ]
      ]
    },
    {
      "id": "class_182",
      "chapters": [
        36
      ],
      "match": "any",
      "terms": [
        "天然／合成 estrogen"
      ],
      "facts": [
        [
          "用途/ADR",
          "estrogen 用於避孕或荷爾蒙治療；血栓、乳房/子宮內膜相關風險為常考。"
        ]
      ]
    },
    {
      "id": "class_183",
      "chapters": [
        36
      ],
      "match": "any",
      "terms": [
        "serds"
      ],
      "facts": [
        [
          "機轉",
          "selective estrogen receptor degrader，促進 ER degradation；用於 ER-positive breast cancer。"
        ]
      ]
    },
    {
      "id": "class_184",
      "chapters": [
        36
      ],
      "match": "any",
      "terms": [
        "progesterone／progestins"
      ],
      "facts": [
        [
          "重點",
          "progestin 抑制 LH surge、使子宮內膜不利著床並增稠子宮頸黏液；不同 progestin 的 androgenic/antimineralocorticoid 性質可考。"
        ]
      ]
    },
    {
      "id": "class_185",
      "chapters": [
        36
      ],
      "match": "any",
      "terms": [
        "cyp17 inhibitor"
      ],
      "facts": [
        [
          "機轉",
          "abiraterone 抑制 CYP17，降低 androgen synthesis；需合併 glucocorticoid，並注意 mineralocorticoid excess。"
        ]
      ]
    },
    {
      "id": "class_186",
      "chapters": [
        38
      ],
      "match": "any",
      "terms": [
        "t4／t3",
        "-thyroxine",
        "-thyronine"
      ],
      "facts": [
        [
          "重點",
          "levothyroxine 為 T4；空腹服用且與 Ca/Fe 等錯開，治療以 TSH 監測。"
        ]
      ]
    },
    {
      "id": "class_187",
      "chapters": [
        38
      ],
      "match": "any",
      "terms": [
        "radioactive iodine"
      ],
      "facts": [
        [
          "重點",
          "I-131 被 thyroid uptake 後造成組織破壞；妊娠與哺乳禁用。"
        ]
      ]
    },
    {
      "id": "class_188",
      "chapters": [
        37
      ],
      "match": "any",
      "terms": [
        "calcium／vitamin d"
      ],
      "facts": [
        [
          "重點",
          "vitamin D 增加腸道 Ca/P 吸收；活性型 calcitriol 在腎病/副甲狀腺相關情境常考。"
        ]
      ]
    },
    {
      "id": "class_189",
      "chapters": [
        37
      ],
      "match": "any",
      "terms": [
        "sclerostin inhibitor"
      ],
      "facts": [
        [
          "機轉",
          "romosozumab 抑制 sclerostin，兼具促骨生成與抑制骨吸收；注意心血管警訊。"
        ]
      ]
    },
    {
      "id": "class_190",
      "chapters": [
        34
      ],
      "match": "any",
      "terms": [
        "gh receptor antagonist"
      ],
      "facts": [
        [
          "機轉",
          "pegvisomant 阻斷 GH receptor，用於 acromegaly；以 IGF-1 監測。"
        ]
      ]
    },
    {
      "id": "class_191",
      "chapters": [
        32
      ],
      "match": "any",
      "terms": [
        "口服鐵",
        "靜脈鐵"
      ],
      "facts": [
        [
          "重點",
          "口服 ferrous salt 常見 GI 不適與黑便；IV iron 用於吸收不良或需快速補充。"
        ]
      ]
    },
    {
      "id": "class_192",
      "chapters": [
        32
      ],
      "match": "any",
      "terms": [
        "folate／b12"
      ],
      "facts": [
        [
          "重點",
          "補 folate 前需排除 B12 deficiency，否則神經病變可持續惡化。"
        ]
      ]
    },
    {
      "id": "class_193",
      "chapters": [
        32
      ],
      "match": "any",
      "terms": [
        "erythropoiesis-stimulating agents"
      ],
      "facts": [
        [
          "機轉/ADR",
          "刺激 erythroid progenitor；高血壓與 thromboembolism，目標 Hb 不宜過高。"
        ]
      ]
    },
    {
      "id": "class_194",
      "chapters": [
        32
      ],
      "match": "any",
      "terms": [
        "iron chelators"
      ],
      "facts": [
        [
          "機轉",
          "chelates excess iron；deferoxamine 可治急性鐵中毒，其他口服藥用於慢性鐵負荷。"
        ]
      ]
    },
    {
      "id": "class_195",
      "chapters": [
        16
      ],
      "match": "any",
      "terms": [
        "methylxanthines"
      ],
      "facts": [
        [
          "機轉",
          "adenosine receptor antagonism 與 PDE inhibition；theophylline 治療窗窄。"
        ],
        [
          "毒性",
          "心律不整與癲癇；CYP 交互作用常考。"
        ]
      ]
    },
    {
      "id": "class_196",
      "chapters": [
        16
      ],
      "match": "any",
      "terms": [
        "amphetamines",
        "methylphenidate 類",
        "釋放／回收抑制"
      ],
      "facts": [
        [
          "機轉",
          "增加 catecholamine signaling；可用於 ADHD。"
        ],
        [
          "ADR",
          "食慾下降、失眠、心搏過速/高血壓與濫用風險。"
        ]
      ]
    },
    {
      "id": "class_197",
      "chapters": [
        16
      ],
      "match": "any",
      "terms": [
        "非典型促醒"
      ],
      "facts": [
        [
          "重點",
          "modafinil/armodafinil 用於 narcolepsy 等；相較傳統 amphetamine 濫用性較低但仍有交互作用。"
        ]
      ]
    },
    {
      "id": "class_198",
      "chapters": [
        16
      ],
      "match": "any",
      "terms": [
        "serotonergic psychedelics"
      ],
      "facts": [
        [
          "機轉",
          "多與 5-HT2A agonism 有關；感知扭曲與心理反應為主要效應。"
        ]
      ]
    },
    {
      "id": "class_199",
      "chapters": [
        16
      ],
      "match": "any",
      "terms": [
        "nmda antagonists",
        "解離性藥物"
      ],
      "facts": [
        [
          "重點",
          "ketamine/PCP 類造成 dissociation；ketamine 亦具快速抗憂鬱與麻醉用途。"
        ]
      ]
    },
    {
      "id": "class_200",
      "chapters": [
        25
      ],
      "match": "any",
      "terms": [
        "aversive therapy"
      ],
      "facts": [
        [
          "酒精",
          "disulfiram 抑制 aldehyde dehydrogenase，飲酒後 acetaldehyde 累積。"
        ]
      ]
    },
    {
      "id": "class_201",
      "chapters": [
        25
      ],
      "match": "any",
      "terms": [
        "降低獎賞／渴求"
      ],
      "facts": [
        [
          "酒精",
          "naltrexone 降低 rewarding effect；acamprosate 調節 glutamate/GABA、協助維持戒酒。"
        ]
      ]
    },
    {
      "id": "class_202",
      "chapters": [
        25
      ],
      "match": "any",
      "terms": [
        "常見 toxic alcohols"
      ],
      "facts": [
        [
          "毒物",
          "methanol/ethylene glycol 的毒性代謝物由 alcohol dehydrogenase 形成；fomepizole 可阻斷。"
        ]
      ]
    },
    {
      "id": "class_203",
      "chapters": [
        22
      ],
      "match": "any",
      "terms": [
        "廣效多機轉"
      ],
      "facts": [
        [
          "抗癲癇",
          "廣效藥常可涵蓋 generalized seizure；仍需依妊娠風險與副作用選擇。"
        ]
      ]
    },
    {
      "id": "class_204",
      "chapters": [
        22
      ],
      "match": "any",
      "terms": [
        "dravet",
        "lennox-gastaut"
      ],
      "facts": [
        [
          "抗癲癇",
          "特定 epilepsy syndrome 有專屬藥物；sodium-channel blocker 在 Dravet 可能惡化。"
        ]
      ]
    },
    {
      "id": "class_205",
      "chapters": [
        22
      ],
      "match": "any",
      "terms": [
        "gaba 增強"
      ],
      "facts": [
        [
          "抗癲癇",
          "增加 GABAergic inhibition；benzodiazepine 常用急性 seizure/status epilepticus。"
        ]
      ]
    },
    {
      "id": "class_206",
      "chapters": [
        22
      ],
      "match": "any",
      "terms": [
        "glutamate",
        "ampa／nmda"
      ],
      "facts": [
        [
          "抗癲癇",
          "降低 excitatory glutamate transmission；注意精神/認知副作用。"
        ]
      ]
    },
    {
      "id": "class_207",
      "chapters": [
        23
      ],
      "match": "any",
      "terms": [
        "低效價"
      ],
      "facts": [
        [
          "抗精神病",
          "低效價第一代較多抗膽鹼、鎮靜與姿勢性低血壓。"
        ]
      ]
    },
    {
      "id": "class_208",
      "chapters": [
        23
      ],
      "match": "any",
      "terms": [
        "5-ht2a inverse agonist"
      ],
      "facts": [
        [
          "機轉",
          "pimavanserin 為 5-HT2A inverse agonist，用於 Parkinson disease psychosis，幾乎無 D2 blockade。"
        ]
      ]
    },
    {
      "id": "class_209",
      "chapters": [
        34
      ],
      "match": "any",
      "terms": [
        "gonadotropins"
      ],
      "facts": [
        [
          "用途",
          "FSH/LH/hCG 類用於誘導排卵或生殖治療；ovarian hyperstimulation 為重要風險。"
        ]
      ]
    },
    {
      "id": "class_210",
      "chapters": [
        34
      ],
      "match": "all",
      "terms": [
        "dopamine agonists",
        "prolactin"
      ],
      "facts": [
        [
          "機轉",
          "D2 agonist 降低 prolactin；亦可用於 Parkinson disease。"
        ]
      ]
    },
    {
      "id": "class_211",
      "chapters": [
        34
      ],
      "match": "any",
      "terms": [
        "oxytocin receptor agonists"
      ],
      "facts": [
        [
          "用途/ADR",
          "促進子宮收縮；過量可 uterine hyperstimulation、水中毒。"
        ]
      ]
    },
    {
      "id": "class_212",
      "chapters": [
        33
      ],
      "match": "any",
      "terms": [
        "bile acid sequestrants"
      ],
      "facts": [
        [
          "機轉",
          "在腸道結合 bile acid，增加其排泄；可升 TG 並干擾其他藥吸收。"
        ]
      ]
    },
    {
      "id": "class_213",
      "chapters": [
        33
      ],
      "match": "any",
      "terms": [
        "pcsk9"
      ],
      "facts": [
        [
          "機轉",
          "增加 LDL receptor recycling，顯著降低 LDL。"
        ]
      ]
    },
    {
      "id": "class_214",
      "chapters": [
        33
      ],
      "match": "any",
      "terms": [
        "acl inhibitor"
      ],
      "facts": [
        [
          "機轉",
          "bempedoic acid 抑制 ATP citrate lyase，作用在 HMG-CoA reductase 上游；主要在肝活化。"
        ]
      ]
    },
    {
      "id": "class_215",
      "chapters": [
        33
      ],
      "match": "any",
      "terms": [
        "niacin／omega-3"
      ],
      "facts": [
        [
          "重點",
          "niacin 可 flushing、高尿酸與高血糖；icosapent ethyl 主要降低 TG。"
        ]
      ]
    },
    {
      "id": "class_216",
      "chapters": [
        31
      ],
      "match": "any",
      "terms": [
        "fibrinolytics"
      ],
      "facts": [
        [
          "機轉/ADR",
          "將 plasminogen 活化為 plasmin、溶解 fibrin；主要風險為嚴重出血/顱內出血。"
        ]
      ]
    },
    {
      "id": "class_217",
      "chapters": [
        31
      ],
      "match": "any",
      "terms": [
        "doac antidotes"
      ],
      "facts": [
        [
          "解毒",
          "idarucizumab 專一逆轉 dabigatran；andexanet alfa 逆轉 factor Xa inhibitors。"
        ]
      ]
    },
    {
      "id": "class_218",
      "chapters": [
        44
      ],
      "match": "any",
      "terms": [
        "mast cell stabilizer"
      ],
      "facts": [
        [
          "機轉",
          "穩定 mast cell、預防 mediator release；主要用於預防而非急性症狀。"
        ]
      ]
    },
    {
      "id": "class_219",
      "chapters": [
        45
      ],
      "match": "any",
      "terms": [
        "cytoprotective agents"
      ],
      "facts": [
        [
          "重點",
          "sucralfate 在酸性環境形成保護層；bismuth 具黏膜保護與抗 H. pylori 作用。"
        ]
      ]
    },
    {
      "id": "class_220",
      "chapters": [
        45
      ],
      "match": "any",
      "terms": [
        "pge1 analog"
      ],
      "facts": [
        [
          "重點",
          "misoprostol 預防 NSAID ulcer，但可致腹瀉與子宮收縮，妊娠需注意。"
        ]
      ]
    },
    {
      "id": "class_221",
      "chapters": [
        46
      ],
      "match": "any",
      "terms": [
        "opioid／antisecretory"
      ],
      "facts": [
        [
          "機轉",
          "周邊 μ-opioid agonism 降低腸蠕動；感染性/血性腹瀉需避免。"
        ]
      ]
    },
    {
      "id": "class_222",
      "chapters": [
        35
      ],
      "match": "any",
      "terms": [
        "吸入型 steroid"
      ],
      "facts": [
        [
          "重點",
          "吸入後需漱口以降低 oral candidiasis/hoarseness；控制藥而非急救。"
        ]
      ]
    },
    {
      "id": "class_223",
      "chapters": [
        35
      ],
      "match": "all",
      "terms": [
        "mineralocorticoid",
        "replacement"
      ],
      "facts": [
        [
          "機轉",
          "fludrocortisone 具強 mineralocorticoid activity，可造成高血壓、低血鉀與水鈉滯留。"
        ]
      ]
    }
  ]
};
