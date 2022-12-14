package com.ruoyi.product.domain;

import java.math.BigDecimal;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 铁水包液位对象 product_blast_furnace_level
 * 
 * @author zongyoucheng
 * @date 2022-11-24
 */
public class ProductBlastFurnaceLevel extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 液位数据ID */
    private Long blastFurnaceLevelId;

    /** 时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date datetime;

    /** 1号铁水包 */
    @Excel(name = "1号铁水包")
    private BigDecimal equipmentA1;

    /** 2号铁水包 */
    @Excel(name = "2号铁水包")
    private BigDecimal equipmentA2;

    /** 3号铁水包 */
    @Excel(name = "3号铁水包")
    private BigDecimal equipmentA3;

    /** 6号铁水包 */
    @Excel(name = "6号铁水包")
    private BigDecimal equipmentA6;

    /** 7号铁水包 */
    @Excel(name = "7号铁水包")
    private BigDecimal equipmentA7;

    /** 8号铁水包 */
    @Excel(name = "8号铁水包")
    private BigDecimal equipmentA8;

    public void setBlastFurnaceLevelId(Long blastFurnaceLevelId) 
    {
        this.blastFurnaceLevelId = blastFurnaceLevelId;
    }

    public Long getBlastFurnaceLevelId() 
    {
        return blastFurnaceLevelId;
    }
    public void setDatetime(Date datetime) 
    {
        this.datetime = datetime;
    }

    public Date getDatetime() 
    {
        return datetime;
    }
    public void setEquipmentA1(BigDecimal equipmentA1) 
    {
        this.equipmentA1 = equipmentA1;
    }

    public BigDecimal getEquipmentA1() 
    {
        return equipmentA1;
    }
    public void setEquipmentA2(BigDecimal equipmentA2) 
    {
        this.equipmentA2 = equipmentA2;
    }

    public BigDecimal getEquipmentA2() 
    {
        return equipmentA2;
    }
    public void setEquipmentA3(BigDecimal equipmentA3) 
    {
        this.equipmentA3 = equipmentA3;
    }

    public BigDecimal getEquipmentA3() 
    {
        return equipmentA3;
    }
    public void setEquipmentA6(BigDecimal equipmentA6) 
    {
        this.equipmentA6 = equipmentA6;
    }

    public BigDecimal getEquipmentA6() 
    {
        return equipmentA6;
    }
    public void setEquipmentA7(BigDecimal equipmentA7) 
    {
        this.equipmentA7 = equipmentA7;
    }

    public BigDecimal getEquipmentA7() 
    {
        return equipmentA7;
    }
    public void setEquipmentA8(BigDecimal equipmentA8) 
    {
        this.equipmentA8 = equipmentA8;
    }

    public BigDecimal getEquipmentA8() 
    {
        return equipmentA8;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("blastFurnaceLevelId", getBlastFurnaceLevelId())
            .append("datetime", getDatetime())
            .append("equipmentA1", getEquipmentA1())
            .append("equipmentA2", getEquipmentA2())
            .append("equipmentA3", getEquipmentA3())
            .append("equipmentA6", getEquipmentA6())
            .append("equipmentA7", getEquipmentA7())
            .append("equipmentA8", getEquipmentA8())
            .toString();
    }
}
