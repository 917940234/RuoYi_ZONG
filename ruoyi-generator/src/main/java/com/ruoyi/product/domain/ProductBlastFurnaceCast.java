package com.ruoyi.product.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 出铁时间计控对象 product_blast_furnace_cast
 * 
 * @author zongyoucheng
 * @date 2022-10-11
 */
public class ProductBlastFurnaceCast extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 高炉出铁数据ID */
    private Long blastFurnaceCastId;

    /** 铁水包位置（123678） */
    @Excel(name = "铁水包位置", readConverterExp = "1=23678")
    private Long equipmentLocation;

    /** 出铁开始时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "出铁开始时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date castStartTime;

    /** 出铁报警时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "出铁报警时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date castAlertTime;

    /** 出铁结束时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "出铁结束时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date castEndTime;

    /** 出铁合计时间 */
    @Excel(name = "出铁合计时间")
    private String castTotalTime;

    /** 出铁吨位 */
    @Excel(name = "出铁吨位")
    private String castTonnage;

    public void setBlastFurnaceCastId(Long blastFurnaceCastId) 
    {
        this.blastFurnaceCastId = blastFurnaceCastId;
    }

    public Long getBlastFurnaceCastId() 
    {
        return blastFurnaceCastId;
    }
    public void setEquipmentLocation(Long equipmentLocation) 
    {
        this.equipmentLocation = equipmentLocation;
    }

    public Long getEquipmentLocation() 
    {
        return equipmentLocation;
    }
    public void setCastStartTime(Date castStartTime) 
    {
        this.castStartTime = castStartTime;
    }

    public Date getCastStartTime() 
    {
        return castStartTime;
    }
    public void setCastAlertTime(Date castAlertTime) 
    {
        this.castAlertTime = castAlertTime;
    }

    public Date getCastAlertTime() 
    {
        return castAlertTime;
    }
    public void setCastEndTime(Date castEndTime) 
    {
        this.castEndTime = castEndTime;
    }

    public Date getCastEndTime() 
    {
        return castEndTime;
    }
    public void setCastTotalTime(String castTotalTime) 
    {
        this.castTotalTime = castTotalTime;
    }

    public String getCastTotalTime() 
    {
        return castTotalTime;
    }
    public void setCastTonnage(String castTonnage) 
    {
        this.castTonnage = castTonnage;
    }

    public String getCastTonnage() 
    {
        return castTonnage;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("blastFurnaceCastId", getBlastFurnaceCastId())
            .append("equipmentLocation", getEquipmentLocation())
            .append("castStartTime", getCastStartTime())
            .append("castAlertTime", getCastAlertTime())
            .append("castEndTime", getCastEndTime())
            .append("castTotalTime", getCastTotalTime())
            .append("castTonnage", getCastTonnage())
            .toString();
    }
}
