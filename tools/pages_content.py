"""Hizmet sayfalarının içeriği. Liste öğeleri madde işaretli liste olarak basılır."""

SHOP_IMG = {'file': 'beyoglu-kuru-temizleme-mezitli-dukkan', 'w': 1000, 'h': 750,
            'alt': 'Beyoğlu Kuru Temizleme Mezitli dükkanı',
            'caption': 'Mezitli Yeni Mahalle\'deki dükkanımız'}

LOCATION_PARA = ("Dükkanımız Mezitli Yeni Mahalle'de, 33175 Sokak üzerindedir. Viranşehir, Davultepe, Tece "
                 "ve Yenişehir gibi yakın bölgelerden kolayca ulaşabilirsiniz. Pazartesi'den Cumartesi'ye "
                 "08:00 - 18:30 arası hizmetinizdeyiz.")

PAGES = [
    {
        'slug': 'gelinlik-abiye-temizleme-mersin',
        'breadcrumb': 'Gelinlik & Abiye Temizleme',
        'service_name': 'Gelinlik ve Abiye Temizleme',
        'icon': 'fa-gem',
        'title': 'Gelinlik ve Abiye Temizleme Mersin | Beyoğlu Kuru Temizleme',
        'description': "Mersin Mezitli'de gelinlik ve abiye temizleme. Boncuk, dantel ve işlemelere zarar "
                       "vermeden hassas kuru temizleme. 10+ yıllık tecrübe, güvenli teslim.",
        'h1': "Mersin'de Gelinlik ve Abiye Temizleme",
        'intro': "En özel gününüzün kıyafetini, boncuk ve işlemelerine zarar vermeden temizliyor, "
                 "ilk günkü haline kavuşturuyoruz.",
        'sections': [
            ("Gelinliğiniz Emin Ellerde", [
                "Gelinlik ve abiyeler; tül, dantel, saten, şifon gibi hassas kumaşlardan oluşur ve üzerinde "
                "boncuk, pul, taş gibi süslemeler bulunur. Bu kıyafetler sıradan bir yıkamaya dayanmaz. "
                "Beyoğlu Kuru Temizleme olarak Mezitli'de 10 yılı aşkın süredir gelinlik ve abiye temizliğini "
                "kumaşa özel yöntemlerle yapıyoruz.",
                "Düğün gecesinden sonra etekte biriken toz ve çamur, yemek ve içecek lekeleri ya da makyaj izleri "
                "zamanla kumaşa işler ve sararmaya yol açar. Bu yüzden gelinliğinizi düğünden sonra mümkün olan "
                "en kısa sürede temizletmenizi öneririz.",
            ]),
            ("Temizlik Sürecimiz", [
                [
                    "Teslim alırken kumaşı, etiketi ve süslemeleri birlikte kontrol ediyoruz",
                    "Lekeleri türüne göre (yağ, makyaj, toprak, içecek) ayrı ayrı ön işlemden geçiriyoruz",
                    "Hassas kumaşlara uygun kuru temizleme yöntemi uyguluyoruz",
                    "Boncuk, pul ve taşların zarar görmemesi için işlemleri elde takip ediyoruz",
                    "Buharla şekillendirip askıda teslime hazırlıyoruz",
                ],
                "Teslimatta yapılan işlemler ve ürünün durumu hakkında size bilgi veriyoruz. Gelinliğinizin "
                "bir yırtık ya da sökük nedeniyle tadilata ihtiyacı varsa terzimiz aynı yerde ilgilenir.",
            ]),
            ("Abiye ve Özel Gün Kıyafetleri", [
                "Nişan elbisesi, kına kıyafeti, mezuniyet ve davet abiyeleri de aynı özenle temizlenir. Pullu, "
                "taşlı veya kadife abiyelerinizi kumaş yapısına uygun yöntemle temizliyor, ütü izi bırakmadan "
                "teslim ediyoruz.",
            ]),
            ("Mezitli'de Bize Nasıl Ulaşırsınız?", [LOCATION_PARA]),
        ],
        'images': [
            {'file': 'gelinlik-temizleme-mersin', 'w': 817, 'h': 1000,
             'alt': 'Mersin gelinlik temizleme sonrası askıda gelinlik',
             'caption': 'Temizlenip teslime hazırlanan bir gelinlik'},
            {'file': 'gelinlik-kuru-temizleme-mezitli', 'w': 750, 'h': 1000,
             'alt': 'Mezitli gelinlik kuru temizleme', 'caption': 'Dükkanımızda bir gelinlik'},
        ],
        'faq': [
            ("Mezitli'de gelinlik ve abiye temizliği yapıyor musunuz?",
             "Evet. Hassas kumaşlara özel yöntemlerle iz bırakmadan temizlik ve koruma uyguluyoruz."),
            ("Gelinliği düğünden ne kadar sonra temizletmeliyim?",
             "Lekeler zamanla kumaşa işleyip sararmaya yol açtığı için mümkün olan en kısa sürede "
             "temizletmenizi öneririz."),
            ("Boncuk ve taşlar temizlikte zarar görür mü?",
             "Süslemeleri teslim alırken birlikte kontrol ediyor, temizlik boyunca zarar görmemeleri için "
             "işlemleri elde takip ediyoruz."),
            ("Gelinlik temizleme fiyatı ne kadar?",
             "Fiyat; gelinliğin kumaşına, katman sayısına ve lekelerin durumuna göre değişir. Fotoğrafını "
             "WhatsApp'tan gönderirseniz hızlıca bilgi veririz."),
        ],
    },
    {
        'slug': 'kuru-temizleme-mezitli',
        'breadcrumb': 'Kuru Temizleme',
        'service_name': 'Kuru Temizleme',
        'icon': 'fa-spray-can',
        'title': 'Mezitli Kuru Temizleme | Beyoğlu Kuru Temizleme Mersin',
        'description': "Mezitli'de takım elbise, kaban, mont ve hassas kumaşlar için profesyonel kuru "
                       "temizleme. Leke çıkarma, hijyen ve 24 saatte teslim.",
        'h1': "Mezitli'de Profesyonel Kuru Temizleme",
        'intro': "Takım elbise, kaban, mont ve hassas kumaşlarınız için leke çıkarma ve derinlemesine "
                 "temizlik. Standart işlerde 24 saatte teslim.",
        'sections': [
            ("Kuru Temizleme Nedir?", [
                "Kuru temizleme, suya dayanıksız kumaşların su yerine özel çözücülerle temizlenmesidir. Yün, "
                "ipek, kaşmir, viskon gibi kumaşlar evde yıkandığında çekebilir, renk verebilir ya da formunu "
                "kaybedebilir. Etiketinde kuru temizleme işareti olan kıyafetlerinizi bize getirdiğinizde "
                "kumaşın yapısına uygun işlemi uygularız.",
            ]),
            ("Neleri Temizliyoruz?", [
                [
                    "Takım elbise, ceket, pantolon ve yelek",
                    "Kaban, palto, trençkot",
                    "Kaz tüyü ve şişme montlar",
                    "Yün, kaşmir ve ipek ürünler",
                    "Etek, elbise, bluz ve gömlek",
                    "Kanvas çanta ve ayakkabı gibi tekstil ürünleri",
                ],
            ]),
            ("Leke Çıkarma ve Hijyen", [
                "Her ürünü temizlik öncesinde kontrol eder, lekeleri türüne göre ön işlemden geçiririz. "
                "Temizlik sonrasında kıyafetler buharlı ütüyle şekillendirilir ve askıda teslim edilir. "
                "Çevre dostu temizlik ürünleri kullanıyoruz.",
            ]),
            ("Teslim Süresi", [
                "Standart kuru temizleme işleri 24 saatte, acil işler aynı gün teslim edilir. Yoğun dönemlerde "
                "kesin teslim saatini ürününüzü bırakırken söyleriz.",
                LOCATION_PARA,
            ]),
        ],
        'images': [
            {'file': 'kaz-tuyu-mont-temizleme-mersin', 'w': 828, 'h': 809,
             'alt': 'Kaz tüyü mont kuru temizleme Mersin', 'caption': 'Temizlenmiş kaz tüyü bir mont'},
            {'file': 'kanvas-canta-temizleme', 'w': 750, 'h': 1000,
             'alt': 'Kanvas çanta temizleme sonrası', 'caption': 'Kanvas çanta temizliği'},
        ],
        'faq': [
            ("Mersin'de kuru temizleme ne kadar sürer?",
             "Standart temizlikler 24 saatte, acil işler aynı gün teslim edilir."),
            ("Hangi kıyafetler kuru temizlemeye verilmeli?",
             "Etiketinde kuru temizleme işareti olan ürünler ile yün, ipek, kaşmir gibi suya dayanıksız "
             "kumaşlar ve takım elbise, kaban gibi formunu koruması gereken kıyafetler."),
            ("Mont ve kaban temizliyor musunuz?",
             "Evet. Kaz tüyü ve şişme montlar dahil mont, kaban ve palto temizliği yapıyoruz."),
            ("Kuru temizleme fiyatlarınız ne kadar?",
             "Fiyat; ürünün türüne, kumaşına ve yapılacak işleme göre değişir. Ürününüzün fotoğrafını "
             "WhatsApp'tan gönderirseniz hızlıca fiyat bilgisi veririz."),
        ],
    },
    {
        'slug': 'terzi-tadilat-mersin',
        'breadcrumb': 'Terzi & Tadilat',
        'service_name': 'Terzi ve Tadilat',
        'icon': 'fa-cut',
        'title': 'Mersin Terzi ve Tadilat | Mezitli Paça, Daraltma, Fermuar',
        'description': "Mezitli'de terzi tadilatı: paça kısaltma, daraltma, genişletme, fermuar değişimi. "
                       "Basit tadilatlar aynı gün, detaylı işler 1-2 iş günü.",
        'h1': "Mersin Mezitli'de Terzi ve Tadilat",
        'intro': "Paça kısaltmadan fermuar değişimine, kıyafetleriniz üzerinize tam otursun. Basit "
                 "tadilatlar aynı gün teslim.",
        'sections': [
            ("Usta Terzi İşçiliği", [
                "Yeni aldığınız pantolonun paçası uzun, sevdiğiniz ceketin beli bol ya da montunuzun fermuarı "
                "bozulmuş olabilir. Beyoğlu Kuru Temizleme'de kuru temizlik ile terzi tadilatını aynı çatı "
                "altında sunuyoruz. Kıyafetinizi bir kez bırakır, temiz ve tadilatı yapılmış halde teslim "
                "alırsınız.",
            ]),
            ("Yaptığımız Tadilatlar", [
                [
                    "Paça kısaltma (pantolon, kot, takım elbise)",
                    "Daraltma ve genişletme (bel, yan, kol)",
                    "Kol boyu kısaltma",
                    "Fermuar değişimi (pantolon, mont, etek, elbise)",
                    "Söküklerin ve yırtıkların onarımı",
                    "Takım elbise ve abiye tadilatları",
                ],
            ]),
            ("Prova ve Teslim Süresi", [
                "Ölçü gerektiren tadilatlarda kıyafeti üzerinizde prova ederek işaretliyoruz. Paça kısaltma ve "
                "basit tadilatlar aynı gün, detaylı işlemler 1-2 iş günü içinde teslim edilir.",
                "Düğün, nişan ya da mezuniyet gibi özel bir gününüz için takım elbise veya abiye tadilatına "
                "ihtiyacınız varsa tarihi bize önceden söyleyin, planlamayı ona göre yapalım.",
            ]),
            ("Mezitli'de Bize Nasıl Ulaşırsınız?", [LOCATION_PARA]),
        ],
        'images': [SHOP_IMG],
        'faq': [
            ("Terzi tadilatlarında teslim süresi nedir?",
             "Paça kısaltma ve basit tadilatlar aynı gün, detaylı işlemler 1-2 iş günü içinde teslim edilir."),
            ("Tadilat için prova gerekli mi?",
             "Daraltma, kol boyu ve paça gibi ölçü gerektiren işlerde kıyafeti üzerinizde prova ederek "
             "işaretlememiz en doğru sonucu verir."),
            ("Mont fermuarı değiştiriyor musunuz?",
             "Evet. Mont, pantolon, etek ve elbise fermuarlarını değiştiriyoruz."),
            ("Hem temizlik hem tadilat yaptırabilir miyim?",
             "Evet. Kıyafetinizi bir kez bırakırsınız, temizlenmiş ve tadilatı yapılmış halde teslim alırsınız."),
        ],
    },
    {
        'slug': 'utu-hizmeti-mezitli',
        'breadcrumb': 'Profesyonel Ütü',
        'service_name': 'Profesyonel Ütü',
        'icon': 'fa-tshirt',
        'title': 'Mezitli Ütü Hizmeti | Gömlek ve Takım Elbise Ütüsü Mersin',
        'description': "Mezitli'de endüstriyel buharlı ütü ile gömlek, takım elbise, pantolon ve elbise "
                       "ütüleme. Kusursuz görünüm, askıda teslim.",
        'h1': "Mezitli'de Profesyonel Ütü Hizmeti",
        'intro': "Endüstriyel buharlı ütülerle kusursuz görünüm. Gömlekleriniz ilk günkü gibi.",
        'sections': [
            ("Neden Profesyonel Ütü?", [
                "Evde ütülenen gömleklerde yaka ve manşetler istediğiniz gibi oturmayabilir, takım elbisede "
                "parlama ve çift çizgi oluşabilir. Endüstriyel buharlı ütü, kumaşı ezmeden düzleştirir ve "
                "kıyafetin formunu korur.",
            ]),
            ("Ütülediğimiz Ürünler", [
                [
                    "Gömlek ve bluz",
                    "Takım elbise, ceket ve pantolon",
                    "Elbise, etek ve abiye",
                    "Masa örtüsü ve nevresim gibi ev tekstilleri",
                ],
                "Ütülenen kıyafetleri askıda teslim ediyoruz; dolabınıza doğrudan asabilirsiniz.",
            ]),
            ("Temizlik ve Ütü Bir Arada", [
                "Kuru temizlemeye verdiğiniz her kıyafet temizlik sonrasında buharlı ütüyle şekillendirilir. "
                "Sadece ütü yaptırmak istediğiniz kıyafetleri de ayrıca kabul ediyoruz.",
                LOCATION_PARA,
            ]),
        ],
        'images': [
            {'file': 'beyaz-gomlek-yaka-temizleme', 'w': 750, 'h': 1000,
             'alt': 'Beyaz gömlek yaka temizleme ve ütü sonrası', 'caption': 'Temizlenip ütülenmiş bir gömlek'},
        ],
        'faq': [
            ("Sadece ütü hizmeti veriyor musunuz?",
             "Evet. Temizlik gerektirmeyen kıyafetlerinizi sadece ütü için de bırakabilirsiniz."),
            ("Ütülenen kıyafetler nasıl teslim edilir?",
             "Kıyafetler askıda teslim edilir, böylece kırışmadan dolabınıza asabilirsiniz."),
            ("Takım elbise ütüsünde parlama olur mu?",
             "Endüstriyel buharlı ütü kumaşı ezmeden düzleştirdiği için parlama ve çift çizgi riski "
             "azalır."),
        ],
    },
    {
        'slug': 'yorgan-battaniye-yikama-mezitli',
        'breadcrumb': 'Yorgan & Battaniye Yıkama',
        'service_name': 'Yorgan ve Battaniye Yıkama',
        'icon': 'fa-cloud',
        'title': 'Mezitli Yorgan ve Battaniye Yıkama | Beyoğlu Kuru Temizleme',
        'description': "Mezitli'de yorgan, battaniye ve uyku tulumu yıkama. Büyük tamburlu makineler, "
                       "antialerjik deterjan ve düşük ısıda kurutma ile hijyenik temizlik.",
        'h1': "Mezitli'de Yorgan ve Battaniye Yıkama",
        'intro': "Büyük hacimli makinelerde, antialerjik deterjanlarla derinlemesine hijyen sağlayan "
                 "özel yıkama.",
        'sections': [
            ("Ev Makinesine Sığmayanlar İçin", [
                "Yorgan ve battaniyeler ev tipi çamaşır makinelerine sığmaz ya da içinde yeterince "
                "çalkalanamaz. Sonuçta deterjan kalıntısı, kötü koku ve topaklanma oluşur. Yorganlarınızı "
                "büyük tamburlu makinelerde, dolgu malzemesine uygun programlarla yıkıyoruz.",
            ]),
            ("Yıkama Sürecimiz", [
                [
                    "Dolgu tipini (elyaf, yün, kaz tüyü, pamuk) kontrol ediyoruz",
                    "Lekeli ve sararmış bölgelere ön işlem uyguluyoruz",
                    "Büyük tamburlu makinelerde antialerjik deterjanlarla yıkıyoruz",
                    "Dolgunun topaklanmaması için düşük ısıda kurutuyoruz",
                ],
            ]),
            ("Hangi Ürünleri Yıkıyoruz?", [
                [
                    "Elyaf, yün ve kaz tüyü yorganlar",
                    "Battaniye ve pikeler",
                    "Yatak örtüsü ve büyük boy nevresimler",
                    "Uyku tulumu ve kamp ürünleri",
                ],
                "Mevsim geçişlerinde yorgan ve battaniyelerinizi kaldırmadan önce yıkatmak, toz akarı ve "
                "kötü kokuya karşı en etkili önlemdir.",
                LOCATION_PARA,
            ]),
        ],
        'images': [
            {'file': 'yorgan-yikama-oncesi-sonrasi-mezitli', 'w': 1000, 'h': 1000,
             'alt': 'Mezitli yorgan yıkama öncesi ve sonrası', 'caption': 'Sararmış bir yorganın öncesi ve sonrası'},
            {'file': 'kamp-urunu-leke-temizleme-oncesi-sonrasi', 'w': 828, 'h': 810,
             'alt': 'Kamp ürünü leke temizleme öncesi ve sonrası', 'caption': 'Kamp ürünlerinde leke temizliği'},
        ],
        'faq': [
            ("Yorgan ve battaniye temizliği nasıl yapılır?",
             "Büyük tamburlu makineler ve antialerjik deterjanlarla yıkanır, düşük ısıda kurutulur."),
            ("Kaz tüyü yorgan yıkıyor musunuz?",
             "Evet. Kaz tüyü, yün ve elyaf yorganları dolgu tipine uygun programla yıkıyoruz."),
            ("Yorganımda sarı lekeler var, çıkar mı?",
             "Sararmış bölgelere yıkama öncesinde ön işlem uyguluyoruz. Lekenin yaşına göre sonuç "
             "değişebilir; teslim alırken durumu birlikte değerlendiririz."),
        ],
    },
    {
        'slug': 'perde-tul-yikama-mersin',
        'breadcrumb': 'Perde & Tül Yıkama',
        'service_name': 'Perde ve Tül Yıkama',
        'icon': 'fa-layer-group',
        'title': 'Mersin Perde ve Tül Yıkama | Mezitli Beyoğlu Kuru Temizleme',
        'description': "Mersin Mezitli'de perde, tül ve stor perde yıkama. Sararma karşıtı, parlaklık "
                       "veren özel temizleme ve ütü ile teslim.",
        'h1': "Mersin'de Perde ve Tül Yıkama",
        'intro': "Ev tekstilleriniz için sararma karşıtı, parlaklık veren özel temizleme işlemi.",
        'sections': [
            ("Perdeleriniz Neden Sararır?", [
                "Perde ve tüller güneş ışığına, mutfak buharına, sigara dumanına ve sokak tozuna sürekli "
                "maruz kalır. Zamanla rengi solar, beyaz tüller sararır ve kumaş ağırlaşır. Düzenli ve doğru "
                "yöntemle yıkanan perdeler hem daha uzun ömürlü olur hem de evinizi aydınlık gösterir.",
            ]),
            ("Perde Temizlik Sürecimiz", [
                [
                    "Kumaş türüne göre (tül, keten, kadife, saten) uygun yöntemi seçiyoruz",
                    "Tüllere sararma karşıtı, parlaklık veren özel işlem uyguluyoruz",
                    "Kalın ve astarlı perdeleri form kaybı olmadan temizliyoruz",
                    "Yıkama sonrası ütüleyerek teslim ediyoruz",
                ],
            ]),
            ("Ne Sıklıkla Yıkatmalı?", [
                "Tüllerin yılda iki kez, kalın perdelerin ise yılda bir kez yıkanması genellikle yeterlidir. "
                "Mutfak ve sigara içilen odalardaki perdeler daha sık temizlik isteyebilir.",
                LOCATION_PARA,
            ]),
        ],
        'images': [SHOP_IMG],
        'faq': [
            ("Tül perdeler sararmadan yıkanabilir mi?",
             "Evet. Tüllere sararma karşıtı, parlaklık veren özel bir temizleme işlemi uyguluyoruz."),
            ("Kadife ve astarlı perde yıkıyor musunuz?",
             "Evet. Kalın ve astarlı perdeleri kumaş türüne uygun yöntemle, form kaybı olmadan temizliyoruz."),
            ("Perdeler ütülü mü teslim edilir?",
             "Evet. Yıkama sonrasında perdeleri ütüleyerek teslim ediyoruz."),
        ],
    },
]
