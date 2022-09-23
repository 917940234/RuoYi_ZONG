package com.ruoyi.product.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 生产数据监控对象 product_template
 * 
 * @author zongyoucheng
 * @date 2022-09-23
 */
public class ProductTemplate extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 序号 */
    private Long productId;

    /** 流号 */
    @Excel(name = "流号")
    private Long streamNo;

    /** 钢种 */
    @Excel(name = "钢种")
    private String steelGrade;

    /** 宽度 */
    @Excel(name = "宽度")
    private Long width;

    /** 高度 */
    @Excel(name = "高度")
    private Long height;

    /** 理论重量 */
    @Excel(name = "理论重量")
    private Long theoreticalWeight;

    /** 实际重量 */
    @Excel(name = "实际重量")
    private Long actualWeight;

    /** 重差 */
    @Excel(name = "重差")
    private Long weightGap;

    /** 单位重量 */
    @Excel(name = "单位重量")
    private Long unitWeight;

    /** 标定时间 */
    @Excel(name = "标定时间")
    private String time;

    public void setProductId(Long productId) 
    {
        this.productId = productId;
    }

    public Long getProductId() 
    {
        return productId;
    }
    public void setStreamNo(Long streamNo) 
    {
        this.streamNo = streamNo;
    }

    public Long getStreamNo() 
    {
        return streamNo;
    }
    public void setSteelGrade(String steelGrade) 
    {
        this.steelGrade = steelGrade;
    }

    public String getSteelGrade() 
    {
        return steelGrade;
    }
    public void setWidth(Long width) 
    {
        this.width = width;
    }

    public Long getWidth() 
    {
        return width;
    }
    public void setHeight(Long height) 
    {
        this.height = height;
    }

    public Long getHeight() 
    {
        return height;
    }
    public void setTheoreticalWeight(Long theoreticalWeight) 
    {
        this.theoreticalWeight = theoreticalWeight;
    }

    public Long getTheoreticalWeight() 
    {
        return theoreticalWeight;
    }
    public void setActualWeight(Long actualWeight) 
    {
        this.actualWeight = actualWeight;
    }

    public Long getActualWeight() 
    {
        return actualWeight;
    }
    public void setWeightGap(Long weightGap) 
    {
        this.weightGap = weightGap;
    }

    public Long getWeightGap() 
    {
        return weightGap;
    }
    public void setUnitWeight(Long unitWeight) 
    {
        this.unitWeight = unitWeight;
    }

    public Long getUnitWeight() 
    {
        return unitWeight;
    }
    public void setTime(String time) 
    {
        this.time = time;
    }

    public String getTime() 
    {
        return time;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("productId", getProductId())
            .append("streamNo", getStreamNo())
            .append("steelGrade", getSteelGrade())
            .append("width", getWidth())
            .append("height", getHeight())
            .append("theoreticalWeight", getTheoreticalWeight())
            .append("actualWeight", getActualWeight())
            .append("weightGap", getWeightGap())
            .append("unitWeight", getUnitWeight())
            .append("time", getTime())
            .toString();
    }
}
