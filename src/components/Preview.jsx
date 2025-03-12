import "../style/preview.css";
import { useContext, useState } from "react";
import { InfomationContext } from "../App";
import { formatNumber } from "../utils/FormatNumber";


export default function Preview() {
    const [value, setValue] = useContext(InfomationContext);

    //外観、内観、間取り図の挿入処理
    let imageUrl = null;
    if (value.exterior){
        imageUrl = URL.createObjectURL(value.exterior);
    }

    let imageUrl2 = null;
    if (value.interview){
        imageUrl2 = URL.createObjectURL(value.interview);
    }

    let imageUrl3 = null;
    if (value.floor){
        imageUrl3 = URL.createObjectURL(value.floor);
    }
 
    
    return (
        <div className="preview-main" id="pdf">
            <div className="preview-header">
                <div className="preview-bukkenmei">
                    {value.name === "" ? <h2>物件名</h2> : <p>{value.name}</p>}
                </div>
                <div className="preview-yachin">
                    {
                        value.rent === 0 ? <h2>家賃</h2> :
                        <p>賃料: <b>{formatNumber(value.rent)}円</b></p>
                    }
                </div>
            </div>
            <div className="preview-body">
                <div className="preview-images">
                    <div className="preview-gaikan">
                        {!imageUrl && <h2>外観</h2>}
                        {imageUrl && (
                        <img src={imageUrl} alt="アップロード画像" width="300" />
                            )}
                    </div>
                    <div className="preview-naikan">
                    {!imageUrl2 && <h2>内観</h2>}
                        {imageUrl2 && (
                        <img src={imageUrl2} alt="アップロード画像" width="300" />
                            )}
                    </div>
                </div>
                <div className="preview-shosai">
                    <div className="preview-info">
                        <div className="preview-madori">
                        {!imageUrl3 && <h2>間取り図</h2>}
                            {imageUrl3 && (
                        <img src={imageUrl3} alt="アップロード画像" width="300" />
                            )}
                        </div>
                        <div className="preview-otherinfo">
                            {
                                value.address === "" ?
                                <div className="preview-access_placeholder">
                                    <h2>アクセス</h2>
                                </div>
                                : <div className="preview-access">
                                    <h3>所在地</h3>
                                    <p>{value.address}</p>
                                    {value.station !== "" && (
                                        <>
                                            <h3>最寄駅</h3>
                                            <p>{value.station}</p>
                                        </>
                                    )}
                                </div>
                            }
                            <div className="preview-joken_placeholder">
                                <h2>契約条件</h2>
                                <h2>必須条件</h2>
                            </div>
                        </div>
                    </div>
                    {value.area === 0 ?
                    <div className="preview-bukken_info_placeholder">
                        <h2>物件情報</h2>
                    </div>
                    :
                    <div className="preview-bukken_info">
                        <div className="preview-bukken_info_left">
                        <p>面積: <b>{value.area} ㎡</b></p>
                        </div>
                        {value.published !== "" && (
                            <p>公開日: <b>{value.published}</b></p>
                        )}
                        <div className="preview-bukken_info_right">
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}