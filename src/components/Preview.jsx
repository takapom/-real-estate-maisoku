// import { useContext, useState } from "react";
// import "../style/preview.css";
// import { InfomationContext } from "../App";

// export default function Preview() {
//     const [value, setValue] = useContext(InfomationContext);
//     return (
//         <div className="preview-main">
//             <div className="preview-header">
//                 <div className="preview-bukkenmei">
//                     {value.name === "" ? <h2>物件名</h2> : <h2>{value.name}</h2>}
//                 </div>
//                 <div className="preview-yachin">
//                     {value.price === 0 ? <h2>家賃</h2> : <h2>{value.rent}円</h2>}
//                 </div>
//             </div>
//             <div className="preview-body">
//                 <div className="preview-images">
//                     <div className="preview-gaikan">
//                     {value.name === "" ? <h2>面積</h2> : <h2>{value.area}</h2>}
//                     </div>
//                     <div className="preview-naikan">
//                     {value.name === "" ? <h2>最寄駅</h2> : <h2>{value.station}</h2>}
//                     </div>
//                 </div>
//                 <div className="preview-shosai">
//                     <div className="preview-info">
//                         <div className="preview-madori">
//                             <h2>間取り</h2>
//                         </div>
//                         <div className="preview-otherinfo">
//                             <div className="preview-access_placeholder">
//                                 <h2>アクセス</h2>
//                             </div>
//                             <div className="preview-joken_placeholder">
//                                 <h2>契約条件</h2>
//                                 <h2>必須条件</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="preview-bukken_info_placeholder">
//                         <h2>物件情報</h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useContext, useState } from "react";
import { MapPin, Train, Home, Calendar, Maximize, Key, Shield, Info, Star, Coffee, ShoppingBag, School, ParkingMeterIcon as Park, Heart, Share, Printer } from 'lucide-react';
import "../style/preview.css";
import { InfomationContext } from "../App";

export default function Preview() {
  const [value, setValue] = useContext(InfomationContext);
  const [activeImage, setActiveImage] = useState(0);
  
  // サンプル画像配列（実際の実装では value から取得）
  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600"
  ];
  
  // サンプル特徴（実際の実装では value から取得）
  const features = [
    "エアコン", "オートロック", "宅配ボックス", "バルコニー", 
    "システムキッチン", "温水洗浄便座", "浴室乾燥機", "24時間ゴミ出し可"
  ];
  
  // サンプル周辺施設（実際の実装では value から取得）
  const nearbyFacilities = [
    { name: "コンビニ", distance: "徒歩2分", icon: <ShoppingBag size={16} /> },
    { name: "カフェ", distance: "徒歩3分", icon: <Coffee size={16} /> },
    { name: "小学校", distance: "徒歩7分", icon: <School size={16} /> },
    { name: "公園", distance: "徒歩5分", icon: <Park size={16} /> }
  ];

  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="property-type">
          {value.type || "賃貸マンション"} / {value.prefecture || "東京都"}{value.city || "渋谷区"}
        </div>
        <div className="action-buttons">
          <button className="action-button"><Heart size={18} /> お気に入り</button>
          <button className="action-button"><Share size={18} /> シェア</button>
          <button className="action-button"><Printer size={18} /> 印刷</button>
        </div>
      </div>
      
      <div className="property-title">
        <h1>{value.name || "サンプルマンション 渋谷区神南"}</h1>
      </div>
      
      <div className="property-highlights">
        <div className="price">
          <span className="label">賃料</span>
          <span className="value">{value.rent || "95,000"}<span className="unit">円/月</span></span>
        </div>
        <div className="admin-fee">
          <span className="label">管理費</span>
          <span className="value">{value.adminFee || "10,000"}<span className="unit">円/月</span></span>
        </div>
        <div className="deposit">
          <span className="label">敷金/礼金</span>
          <span className="value">{value.deposit || "1ヶ月"}/{value.keyMoney || "1ヶ月"}</span>
        </div>
        <div className="layout">
          <span className="label">間取り</span>
          <span className="value">{value.layout || "1LDK"}</span>
        </div>
        <div className="area">
          <span className="label">専有面積</span>
          <span className="value">{value.area || "35.5"}<span className="unit">m²</span></span>
        </div>
      </div>
      
      <div className="content-grid">
        <div className="image-section">
          <div className="main-image">
            <img 
              src={images[activeImage] || "/placeholder.svg"} 
              alt={`物件画像 ${activeImage + 1}`} 
              className="main-image-content"
            />
            <div className="image-navigation">
              <button 
                className="image-nav-button" 
                onClick={() => setActiveImage(prev => (prev > 0 ? prev - 1 : images.length - 1))}
              >
                &#10094;
              </button>
              <button 
                className="image-nav-button" 
                onClick={() => setActiveImage(prev => (prev < images.length - 1 ? prev + 1 : 0))}
              >
                &#10095;
              </button>
            </div>
          </div>
          <div className="thumbnails">
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`thumbnail ${activeImage === index ? 'active-thumbnail' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={img || "/placeholder.svg"} alt={`サムネイル ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="info-section">
          <div className="info-card">
            <h3 className="info-title">
              <MapPin size={18} className="info-icon" />
              所在地・アクセス
            </h3>
            <div className="info-content">
              <div className="address-line">
                <span className="address-label">住所</span>
                <span className="address-value">
                  {value.prefecture || "東京都"}{value.city || "渋谷区"}{value.address || "神南1-2-3"}
                </span>
              </div>
              <div className="station-access">
                <div className="station-line">
                  <Train size={16} className="station-icon" />
                  <span className="station-name">{value.station || "渋谷駅"}</span>
                  <span className="station-distance">徒歩{value.stationDistance || "5"}分</span>
                </div>
                {value.station2 && (
                  <div className="station-line">
                    <Train size={16} className="station-icon" />
                    <span className="station-name">{value.station2}</span>
                    <span className="station-distance">徒歩{value.stationDistance2 || "8"}分</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <h3 className="info-title">
              <Home size={18} className="info-icon" />
              物件詳細
            </h3>
            <div className="property-details">
              <div className="detail-item">
                <span className="detail-label">物件種別</span>
                <span className="detail-value">{value.type || "マンション"}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">築年数</span>
                <span className="detail-value">{value.buildYear || "2015年"}（築{value.buildAge || "8"}年）</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">階数</span>
                <span className="detail-value">{value.floor || "5"}階 / {value.totalFloors || "10"}階建</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">向き</span>
                <span className="detail-value">{value.direction || "南東"}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">バス・トイレ</span>
                <span className="detail-value">{value.bathroom || "セパレート"}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">駐車場</span>
                <span className="detail-value">{value.parking || "有り（月額15,000円）"}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">入居可能日</span>
                <span className="detail-value">{value.availableDate || "即日可"}</span>
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <h3 className="info-title">
              <Key size={18} className="info-icon" />
              契約条件
            </h3>
            <div className="contract-details">
              <div className="detail-item">
                <span className="detail-label">契約期間</span>
                <span className="detail-value">{value.contractPeriod || "2年"}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">更新料</span>
                <span className="detail-value">{value.renewalFee || "新賃料1ヶ月分"}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">保証会社</span>
                <span className="detail-value">{value.guaranteeCompany || "利用必須（保証料は賃料の50%）"}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">仲介手数料</span>
                <span className="detail-value">{value.brokerageFee || "賃料1ヶ月分"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <h3 className="section-title">
          <Star size={18} className="section-icon" />
          設備・特徴
        </h3>
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-name">{feature}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="neighborhood-section">
        <h3 className="section-title">
          <MapPin size={18} className="section-icon" />
          周辺環境
        </h3>
        <div className="neighborhood-content">
          <div className="facilities-list">
            {nearbyFacilities.map((facility, index) => (
              <div key={index} className="facility-item">
                <div className="facility-icon">{facility.icon}</div>
                <div className="facility-info">
                  <div className="facility-name">{facility.name}</div>
                  <div className="facility-distance">{facility.distance}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="map-placeholder">
            <div className="map-overlay">
              <MapPin size={32} />
              <div>地図を表示</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="description-section">
        <h3 className="section-title">
          <Info size={18} className="section-icon" />
          物件説明
        </h3>
        <div className="description-content">
          {value.description || 
            "閑静な住宅街に位置する明るい室内の物件です。全室フローリングで清潔感があり、キッチンは対面式で広々としています。収納スペースも豊富で、単身者からカップルまで快適に過ごせる間取りとなっています。駅からも近く、スーパーやコンビニも徒歩圏内で生活至便な立地です。"}
        </div>
      </div>
      
      <div className="contact-section">
        <div className="contact-card">
          <h3 className="contact-title">この物件に問い合わせる</h3>
          <div className="contact-buttons">
            <button className="contact-button">
              <Shield size={18} /> 内見予約
            </button>
            <button className="contact-button">
              <Info size={18} /> 詳細を問い合わせる
            </button>
          </div>
          <div className="contact-info">
            <div className="contact-phone">
              <span className="phone-label">お電話でのお問い合わせ</span>
              <span className="phone-number">03-1234-5678</span>
              <span className="phone-hours">（平日 10:00〜19:00）</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}