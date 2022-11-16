package com.ruoyi.product.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 出铁重量计量对象 product_blast_furnace_weight
 * 
 * @author zongyoucheng
 * @date 2022-11-26
 */
public class ProductBlastFurnaceWeight extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 出铁重量表ID */
    private Long blastFurnaceWeightId;

    /** 当前液位表ID */
    @Excel(name = "当前液位表ID")
    private Long blastFurnaceLevelId;

    /** 1号铁水包重量 */
    @Excel(name = "1号铁水包重量")
    private Double equipmentA1Weight;

    /** 2号铁水包重量 */
    @Excel(name = "2号铁水包重量")
    private Double equipmentA2Weight;

    /** 3号铁水包重量 */
    @Excel(name = "3号铁水包重量")
    private Double equipmentA3Weight;

    /** 6号铁水包重量 */
    @Excel(name = "6号铁水包重量")
    private Double equipmentA6Weight;

    /** 7号铁水包重量 */
    @Excel(name = "7号铁水包重量")
    private Double equipmentA7Weight;

    /** 8号铁水包重量 */
    @Excel(name = "8号铁水包重量")
    private Double equipmentA8Weight;

    public void setBlastFurnaceWeightId(Long blastFurnaceWeightId) 
    {
        this.blastFurnaceWeightId = blastFurnaceWeightId;
    }

    public Long getBlastFurnaceWeightId() 
    {
        return blastFurnaceWeightId;
    }
    public void setBlastFurnaceLevelId(Long blastFurnaceLevelId) 
    {
        this.blastFurnaceLevelId = blastFurnaceLevelId;
    }

    public Long getBlastFurnaceLevelId() 
    {
        return blastFurnaceLevelId;
    }
    public void setEquipmentA1Weight(Double equipmentA1Weight) 
    {
        this.equipmentA1Weight = equipmentA1Weight;
    }

    public Double getEquipmentA1Weight() 
    {
        return equipmentA1Weight;
    }
    public void setEquipmentA2Weight(Double equipmentA2Weight) 
    {
        this.equipmentA2Weight = equipmentA2Weight;
    }

    public Double getEquipmentA2Weight() 
    {
        return equipmentA2Weight;
    }
    public void setEquipmentA3Weight(Double equipmentA3Weight) 
    {
        this.equipmentA3Weight = equipmentA3Weight;
    }

    public Double getEquipmentA3Weight() 
    {
        return equipmentA3Weight;
    }
    public void setEquipmentA6Weight(Double equipmentA6Weight) 
    {
        this.equipmentA6Weight = equipmentA6Weight;
    }

    public Double getEquipmentA6Weight() 
    {
        return equipmentA6Weight;
    }
    public void setEquipmentA7Weight(Double equipmentA7Weight) 
    {
        this.equipmentA7Weight = equipmentA7Weight;
    }

    public Double getEquipmentA7Weight() 
    {
        return equipmentA7Weight;
    }
    public void setEquipmentA8Weight(Double equipmentA8Weight) 
    {
        this.equipmentA8Weight = equipmentA8Weight;
    }

    public Double getEquipmentA8Weight() 
    {
        return equipmentA8Weight;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("blastFurnaceWeightId", getBlastFurnaceWeightId())
            .append("blastFurnaceLevelId", getBlastFurnaceLevelId())
            .append("equipmentA1Weight", getEquipmentA1Weight())
            .append("equipmentA2Weight", getEquipmentA2Weight())
            .append("equipmentA3Weight", getEquipmentA3Weight())
            .append("equipmentA6Weight", getEquipmentA6Weight())
            .append("equipmentA7Weight", getEquipmentA7Weight())
            .append("equipmentA8Weight", getEquipmentA8Weight())
            .toString();
    }
}
